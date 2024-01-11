import sharp from 'sharp'
import fs from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname as pathDirname } from 'path'

const __dirname = pathDirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/static/images/')
const outputFilePath = path.join(__dirname, '../data/blurredImages.js')

async function imageToBase64(filePath) {
  return sharp(filePath)
    .resize({ height: 20 })
    .blur()
    .toBuffer()
    .then((data) => `data:image/jpeg;base64,${data.toString('base64')}`)
}

async function processDirectory(directory) {
  const base64Strings = {}

  const files = fs.readdirSync(directory, { withFileTypes: true })
  for (const file of files) {
    const fullPath = path.join(directory, file.name)
    if (file.isDirectory()) {
      const nestedStrings = await processDirectory(fullPath)
      Object.assign(base64Strings, nestedStrings)
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(file.name)) {
      try {
        const base64 = await imageToBase64(fullPath)
        // edit to '/static/images/'
        const relativePath = fullPath.replace(path.join(__dirname, '../public'), '')
        base64Strings[relativePath] = base64
      } catch (error) {
        console.error('Fehler beim Verarbeiten der Datei:', fullPath, error)
      }
    }
  }

  return base64Strings
}

processDirectory(imagesDir).then((base64Strings) => {
  console.log('Generate Base64 Preview Images...')
  fs.writeFile(
    outputFilePath,
    `export const blurDataURL = ${JSON.stringify(base64Strings, null, 2)};`,
    (err) => {
      if (err) {
        console.error('Error writing file:', err)
      } else {
        console.log('Base64-Strings successful generated', outputFilePath)
      }
    }
  )
})

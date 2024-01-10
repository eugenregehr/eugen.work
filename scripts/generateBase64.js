// generateBase64.js

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// Verzeichnis, in dem sich Ihre Bilder befinden
const imagesDir = path.join(__dirname, '../public/static/images/')

// Ziel-Datei für die generierten Base64-Strings
const outputFilePath = path.join(__dirname, '../data/blurredImages.js')

// Funktion, um ein Bild in einen Base64-String zu konvertieren
async function imageToBase64(filePath) {
  return sharp(filePath)
    .resize({ height: 20 }) // Kleine Größe für den Platzhalter
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
      // Rekursiver Aufruf für Unterverzeichnisse
      const nestedStrings = await processDirectory(fullPath)
      Object.assign(base64Strings, nestedStrings)
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(file.name)) {
      // Verarbeiten, wenn es sich um ein Bild handelt
      try {
        const base64 = await imageToBase64(fullPath)
        // Berechnen des relativen Pfades ab '/static/images/'
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
  fs.writeFile(
    outputFilePath,
    `export const blurDataURL = ${JSON.stringify(base64Strings, null, 2)};`,
    (err) => {
      if (err) {
        console.error('Fehler beim Schreiben der Datei:', err)
      } else {
        console.log('Base64-Strings erfolgreich generiert und gespeichert in', outputFilePath)
      }
    }
  )
})

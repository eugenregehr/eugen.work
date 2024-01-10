const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const directoryPath = 'public/static/images/' // Ersetzen Sie dies mit dem Startverzeichnis-Pfad
const createOrUpdateBlurryImage = (filePath) => {
  const directory = path.dirname(filePath)
  const fileName = path.basename(filePath)
  let outputFileName

  if (fileName.startsWith('blurry-')) {
    // Wenn das Bild bereits ein unscharfes Bild ist, überschreiben Sie es direkt
    outputFileName = fileName
  } else {
    // Andernfalls erstellen Sie ein neues unscharfes Bild
    outputFileName = `blurry-${fileName}`
  }

  const outputPath = path.join(directory, outputFileName)

  sharp(filePath)
    .resize({ height: 20 }) // Setzt die Breite und behält das Seitenverhältnis bei
    .blur(1)
    .toFile(outputPath, (err) => {
      if (err) {
        console.error('Fehler beim Erstellen des unscharfen Bildes:', err)
      } else {
        console.log(`Unscharfes Bild erstellt/überschrieben: ${outputPath}`)
      }
    })
}

const processDirectory = (dirPath) => {
  fs.readdir(dirPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error('Fehler beim Lesen des Verzeichnisses:', err)
      return
    }

    entries.forEach((entry) => {
      const fullPath = path.join(dirPath, entry.name)
      if (entry.isDirectory()) {
        processDirectory(fullPath)
      } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
        createOrUpdateBlurryImage(fullPath)
      }
    })
  })
}

processDirectory(directoryPath)

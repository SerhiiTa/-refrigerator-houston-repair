const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = './public/images';
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));

async function resize() {
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const tempPath = filePath + '.tmp';
    await sharp(filePath)
      .rotate()
      .resize(900, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(tempPath);
    fs.renameSync(tempPath, filePath);
    const newSize = fs.statSync(filePath).size / 1024 / 1024;
    console.log(`Done: ${file} - ${newSize.toFixed(2)}MB`);
  }
}

resize().then(() => console.log('All done!'));

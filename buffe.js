const fs = require('fs');

const readStream = fs.createReadStream('readme.md');
const writeStream  = fs.createWriteStream('text1.txt');

readStream.on('data', (chunk) => {
    console.log('----- New Chunj ------');
    console.log(chunk);
    writeStream('new chunk');
});
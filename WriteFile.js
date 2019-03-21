const x = require('fs');
const readFile = __dirname + "/File1.txt";
const writeFile = __dirname + '/File2.txt';

const read = x.createReadStream(readFile);
const write = x.createWriteStream(writeFile);

read.pipe(write);

const fs = require('fs');

let readStream = fs.createReadStream('./FIle1.txt');

readStream.on('open', () => {

    console.log('The file is opend');
    
})
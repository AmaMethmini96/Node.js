const x = require('fs');
const fileName = __dirname + '/FIle1.txt' ;

x.readFile(fileName, (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

let y = x.readFileSync(fileName);

console.log(y.toString());
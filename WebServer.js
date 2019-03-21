const x = require('http');
x.createServer((req,res) => {
        res.setHeader('Content-Type','text/html');
        res.write("<h1>hello world</h1>");
        res.end();
}).listen(3001);
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.write('<head><link rel="styleseet" href="#"/></head>')
    res.write('<p>Hello, ninja</p>');
    res.write('<p>Hello ninja again</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});


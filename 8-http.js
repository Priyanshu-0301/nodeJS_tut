const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is the homepage.');
    } else if (req.url === '/about') {
        res.write('This is all about.');
        res.end();
    } else {
        res.end(
            `<h1>Error</h1>` +
            '<p>We don\'t have that page. What are you looking for.</p>' +
            `<a href='/'>Back to home page</a>`
        );
    }
}).listen(5050);

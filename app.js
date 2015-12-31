/* jshint esnext: true */
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('keys/agent2-key.pem'),
    cert: fs.readFileSync('keys/agent2-cert.pem')
};

https.createServer(options ,(request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Web Server</title>
        </head>
        <body>
            <h1>Web Page Served</h1>
            <p>${request.url}</p>
            <p>${request.method}</p>
            <p>You are welcome ...</p>
        </body>
    </html>
    `);
}).listen(3000);
/**
 * Run server: node-dev app
 * jshint app.js
 * */
console.log(`Server running on 'https://localhost:3000'\nPress Ctrl + c to exit`);
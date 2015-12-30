const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('keys/agent2-key.pem'),
    cert: fs.readFileSync('keys/agent2-cert.pem')
};

const server = https.createServer(options ,(request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML Response</title>
        </head>
        <body>
            <h1>Serving HTML</h1>
            <p>${request.url}</p>
            <p>${request.method}</p>
        </body>
    </html>
    `);
});

server.listen(3000);
console.log(`Server listening on 'https://localhost:3000'\nPress Ctrl + c to exit`);
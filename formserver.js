const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('keys/agent2-key.pem'),
    cert: fs.readFileSync('keys/agent2-cert.pem')
};

https.createServer(options, (request, response) => {
    console.log(`${request.method} request for ${request.url}`);

    if(request.method === 'GET') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream('./public/form.html', 'UTF-8').pipe(response);
    } else if(request.method === 'POST') {
        var body = '';

        request.on('data', chunk => {
            body += chunk;
        });

        request.on('end', chunk => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });

            response.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Form Results</title>
                    </head>
                    <body>
                        <h1>Your Form Results</h1>
                        <p>${body}</p>
                    </body>
                </html>
            `);

        });
    }



}).listen(3000);

console.log(`Server listening on 'http://localhost:3000'\nPress Ctrl + c to exit`);
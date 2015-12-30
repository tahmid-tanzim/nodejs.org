const https = require('https');
const fs = require('fs');

var options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/George_Washington',
    method: 'GET'
};

var req = https.request(options, res => {
    var responseBody = '';

    console.log('Response from server started.');
    console.log(`Server Status: ${res.statusCode} `);
    console.log('Response Headers: %j', res.headers);

    res.setEncoding('UTF-8');

    res.once('data', chunk => {
        console.log('First chunk after data load');
        console.log(chunk);
    });

    res.on('data', chunk => {
        console.log(`--chunk-- ${chunk.length} `);
        responseBody += chunk;
    });

    res.on('end', () => {
        fs.writeFile('george-washington.html', responseBody, err => {
            if(err) {
                throw err;
            }
            console.log('File downloaded');
        });
    });
});

req.on('error', err => {
    console.log(`Problem with Requiest: ${err.message}`);
});

req.end();
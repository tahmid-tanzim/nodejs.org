const https = require('https');
const fs = require('fs');
const data = require('./data/inventory');

const options = {
    key: fs.readFileSync('keys/agent2-key.pem'),
    cert: fs.readFileSync('keys/agent2-cert.pem')
};

https.createServer(options ,(request, response) => {

    if(request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/json'
        });
        response.end(JSON.stringify(data));
    } else if(request.url === '/instock') {
        listInStock(response);
    } else if(request.url === '/onorder') {
        listOnBackOrder(response);
    } else {
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        response.end(`404 File Not Found`);
    }

}).listen(3000);
console.log(`Server listening on 'https://localhost:3000'\nPress Ctrl + c to exit`);

function listInStock(response) {
    var inStock = data.filter((item) => {
        return item.avail === 'In stock';
    });
    response.end(JSON.stringify(inStock));
}

function listOnBackOrder(response) {
    var onOrder = data.filter((item) => {
        return item.avail === 'On back order';
    });
    response.end(JSON.stringify(onOrder));
}
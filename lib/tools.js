const https = require('https');

module.exports = {
    printName(person) {
        return `${person.last}, ${person.first}`;
    },
    loadWiki(person, callback) {
        var url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;
        https.get(url, (response) => {
            var body = "";

            response.setEncoding('UTF-8');

            response.on('data', chunk => {
               body += chunk;
            });

            response.on('end', chunk => {
                callback(body);
            });
        });
    }
};
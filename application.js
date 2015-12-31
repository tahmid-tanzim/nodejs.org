const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

var skierTerms = [
    {
        term: 'Rip',
        defined: 'To move at a high rate of speed'
    },
    {
        term: 'Huck',
        defined: 'To through your body off of something, usually a natural feature like a cliff'
    },
    {
        term: 'Chowder',
        defined: 'Powder after is has been sufficiently skied'
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log(`${request.method} request for '${request.url}' -> ${JSON.stringify(request.body)}`);
    next();
});

app.use(express.static('./application'));

app.use(cors());

app.get('/dictionary-api', (request, response) => {
    response.json(skierTerms);
});

app.post('/dictionary-api', (request, response) => {
    skierTerms.push(request.body);
    response.json(skierTerms);
});

app.delete('/dictionary-api/:term', (request, response) => {
    skierTerms = skierTerms.filter(definition => {
        return definition.term.toLowerCase() !== request.params.term.toLowerCase();
    });
    response.json(skierTerms);
});

app.listen(3000);

console.log('Express app running on port 3000');

module.exports = app;
const fs = require('fs');
const markDown = `
Sample Markdown Title
=====================

Sample subtitle
---------------

* point
* point
* point

`;

fs.writeFile('sample.md', markDown.trim(), (err) => {
    console.log('Markdown File Created.');
});
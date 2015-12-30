const fs = require('fs');

if(fs.existsSync('sample')) {
    console.log('Directory already there');
} else {
    fs.mkdir('sample', (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Directory created ...');
        }
    });
}


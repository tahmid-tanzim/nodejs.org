const fs = require('fs');

fs.readdirSync('./assets/logs').forEach(fileName => {
    fs.unlinkSync('./assets/logs/' + fileName);
});

fs.rmdir('./assets/logs', err => {
    if(err) {
        throw err;
    }
    console.log('Logs directory removed');
})
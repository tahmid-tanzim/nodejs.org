const fs = require('fs');

/* Async */
fs.unlink('notes.md', (err) => {
    if(err) {
        console.log('Async unlink Error: ');
        console.log(err);
    } else {
        console.log('notes.md removed successfully');
    }
});

/* Sync */
try {
    fs.unlinkSync('./lib/config.json');
    console.log('config.json removed successfully');
} catch (err) {
    console.log('Sync unlink Error: ');
    console.log(err);
}

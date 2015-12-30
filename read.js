const fs = require('fs');
const path = require('path');

/**
 * Note: Reading file Asynchronously by readfile.
 * Refs: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
 * */
/*
fs.readFile('./lib/sayings.md', 'UTF-8', (err, contents) => {
    if(err) {
        console.log(err);
    }
    console.log('Reading file Asynchronously');
    console.log(contents);
});
*/
/**
 * Note: Reading file synchronously will block the single node.js thread.
 * Refs: https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options
 * */
/*
const contents = fs.readFileSync('./lib/sayings.md', 'UTF-8');
console.log('Reading file Synchronously');
console.log(contents);
*/

fs.readdir('./lib', (err, files) => {
    files.forEach((fileName) => {
        var file = path.join(__dirname, 'lib', fileName);
        var stats = fs.statSync(file);
        if(stats.isFile() && fileName !== '.DS_Store') {
            fs.readFile(file, 'UTF-8', (err, contents) => {
                console.log(contents);
            });
        }
    });
});
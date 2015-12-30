const fs = require('fs');

/**
 * Note: Reading files from dir synchronously will block the single node.js thread.
 * Refs: https://nodejs.org/api/fs.html#fs_fs_readdirsync_path
 * */
//const files = fs.readdirSync('./lib');
//console.log(files);

/**
 * Note: Reading file Asynchronously by readdir.
 * Refs: https://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 * */
fs.readdir('./lib', (err, files) => {
    if(err) {
        throw err;
    }
    console.log(files);
});

console.log('Reading Files...');
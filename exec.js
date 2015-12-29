const exec = require('child_process').exec;

/* open present working directory */
exec("nautilus .");

/* open facebook in default browser */
exec("sensible-browser http://www.facebook.com");

exec('ls', (err, stdout) => {
    if(err) {
        throw err;
    }
    console.log("Listing Finished");
    console.log(stdout);
});

exec('node --version', (err, stdout) => {
    if(err) {
        throw err;
    }
    console.log("Node Version Executed");
    console.log(stdout);
});
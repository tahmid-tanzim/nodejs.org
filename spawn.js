var spawn = require('child_process').spawn;

var childProcess = spawn('node', ['alwaysTalking']);

childProcess.stdout.on('data', (data) => {
    console.log(`STDOUT: ${data.toString()}`);
});

childProcess.on('close', () => {
    console.log('Child process has ended.');
    process.exit();
});

setTimeout(() => {
  childProcess.stdin.write('stop');
}, 4000);
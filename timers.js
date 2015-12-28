const waitTime = 5000;
var currentTime = 0;
const waitInterval = 10;
var percentWaited = 0;

function writeWaitedPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`)
}

const interval = setInterval(() => {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitedPercent(percentWaited);
}, waitInterval);

setTimeout(() => {
    clearInterval(interval);
    writeWaitedPercent(100);
    console.log('\n\n DONE \n\n');
}, waitTime);

process.stdout.write('\n');
writeWaitedPercent(percentWaited);
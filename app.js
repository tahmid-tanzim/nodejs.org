/* Grab Command Line Arguments */
function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

const user = grab('--user');
const greeting = grab('--greeting');

if(!user || !greeting) {
    console.log("Sorry!\nSample Standard Format: $ node app --user 'Tahmid Tanzim' --greeting 'Good Morning!'");
} else {
    console.log(`Welcome ${user}, ${greeting}`);
}

console.log("\nprocess.argv is:");
/**
 * Note: Default process.argv
 * Output: [ '/home/tanzim/.nvm/versions/node/v5.3.0/bin/node', '/home/tanzim/Projects/nodejs.org/process' ]
 * */
process.argv.forEach((val, index, array) => {
    console.log(index + ': ' + val);
});

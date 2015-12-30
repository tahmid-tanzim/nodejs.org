const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var realPerson = {
    name: '',
    sayings: []
};

/**
 * Note: `Array.prototype.last` will allow you to get the last element of an array by invoking array's last() method
 * */
if (!Array.prototype.last) {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
}

rl.question('What is the name of real person? ', (answer) => {
    realPerson.name = answer || 'Unknown';

    fs.writeFileSync(realPerson.name + '.md', `${realPerson.name}\n=====================\n\n`);

    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();

    /* Read saying Line */
    rl.on('line', (saying) => {
        if(saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            realPerson.sayings.push(saying.trim());
            fs.appendFile(realPerson.name + '.md', `* ${realPerson.sayings.last()} \n`);
            console.log(realPerson.sayings.last());
            rl.setPrompt(`What else would ${realPerson.name} say? (Type 'exit' to leave) `);
            rl.prompt();
        }
    });
});

rl.on('close', () => {
    console.log('%s is a real person that says %j', realPerson.name, realPerson.sayings);
    process.exit();
});
const questions = [
    'What is your name?',
    'What is your favourite hobby?',
    'What is your preferred programming language?'
];

const answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write('  >  ');
}

process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write('\n\n\n');
    process.stdout.write('Output: \n');
    for(var i=0;i<questions.length;i++) {
        process.stdout.write('Question No ' + (i+1) + ': ' + questions[i] + '\nAnswer: ' + answers[i] + '\n\n');
    }
    process.stdout.write('\n\n\n');
})

ask(0);
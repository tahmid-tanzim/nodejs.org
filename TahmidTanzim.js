var Person = require('./lib/Person');

const lupin = new Person("Tahmid Tanzim");
const fatiha = new Person("Kazi Fatiha Akram");

lupin.on('speak', function(said) {
    console.log(`${this.name}: ${said}`);
});

fatiha.on('speak', function(said) {
    console.log(`${this.name} -> ${said}`);
});

lupin.emit('speak', 'Impossible is Nothing!');
fatiha.emit('speak', 'Hello World');
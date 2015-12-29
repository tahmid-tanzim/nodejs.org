var EventEmitter = require('events').EventEmitter;
var util = require('util');

const Person = function(name) {
    this.name = name;
};

util.inherits(Person, EventEmitter);

const lupin = new Person("Tahmid Tanzim");

lupin.on('speak', function(said) {
    util.log(`${this.name}: ${said}`);
});

lupin.emit('speak', 'Impossible is Nothing!');
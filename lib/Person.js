var EventEmitter = require('events').EventEmitter;
var util = require('util');

const Person = function(name) {
    this.name = name;
};

util.inherits(Person, EventEmitter);

module.exports = Person;
const expect = require('chai').expect;
const tools = require('../lib/tools');

describe('printName()', () => {
    it('should print the last name first', () => {
        var results = tools.printName({first: 'Tahmid', last: 'Tanzim'});
        expect(results).to.equal('Tanzim, Tahmid');
    });
});
const expect = require('chai').expect;
const tools = require('../lib/tools');

describe('Tools', () => {

    describe('printName()', () => {
        it('should print the last name first', () => {
            var results = tools.printName({first: 'Tahmid', last: 'Tanzim'});
            expect(results).to.equal('Tanzim, Tahmid');
        });
    });

    describe('loadWiki()', function() {
        this.timeout(10000);
        it("Load Abraham Lincoln's wikipidia page", done => {
            tools.loadWiki({first: 'Abraham', last: 'Lincoln'}, html => {
                expect(html).to.be.ok;
                done();
            });
        });
    });
});


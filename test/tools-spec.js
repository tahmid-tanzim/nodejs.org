const expect = require('chai').expect;
const nock = require('nock');
const tools = require('../lib/tools');

describe('Tools', () => {

    describe('printName()', () => {
        it('should print the last name first', () => {
            var results = tools.printName({first: 'Tahmid', last: 'Tanzim'});
            expect(results).to.equal('Tanzim, Tahmid');
        });
    });

    describe('loadWiki()', function() {
        //this.timeout(10000);
        before(() => {
            nock('https://en.wikipedia.org')
                .get('/wiki/Abraham_Lincoln')
                .reply(200, 'Mock Abraham Lincoln wiki page');
        });

        it("Load Abraham Lincoln's wikipidia page", done => {
            tools.loadWiki({first: 'Abraham', last: 'Lincoln'}, html => {
                //expect(html).to.be.ok;
                expect(html).to.equal('Mock Abraham Lincoln wiki page');
                done();
            });
        });
    });
});


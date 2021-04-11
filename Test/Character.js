let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'https://rickandmortyapi.com';
let assert    = require("chai").assert;
describe('Get character:', () => {
    it('Estatus Code 200', (done) => {
        chai.request(url)
            .get('/api/character')
            .end(function (err, res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
            });
        done();
    });
    it('id 1 name = Rick Sanchez', (done) => {
        chai.request(url)
            .get('/api/character/1?name=Rick Sanchez')
            .end(function (err, res) {
                //console.log(res.body.name)
                assert.equal(res.body.name,"Rick Sanchez")
                

            });
        done();
    });
});
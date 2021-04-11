let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url = 'https://rickandmortyapi.com';
let assert    = require("chai").assert;

describe('Get location:', () => {
    it('Estatus Code 200', (done) => {
        chai.request(url)
            .get('/api/location')
            .end(function (err, res) {
                expect(res).to.have.status(200);
            });
        done();
    });
    it('id 3 name = Citadel of Ricks', (done) => {
        chai.request(url)
            .get('/api/location?id=3&name=Citadel of Ricks')
            .end(function (err, res) {
                assert.equal(res.body.results[0].name,"Citadel of Ricks")
    
            });
        done();
    });
});
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'https://rickandmortyapi.com';
let assert    = require("chai").assert;

describe('Get episode:', () => {
    it('Estatus Code 200', (done) => {
        chai.request(url)
            .get('/api/episode')
            .end(function (err, res) {
                expect(res).to.have.status(200);
            });
        done();
    });
    it('id 2 episode = S01E02', (done) => {
        chai.request(url)
            .get('/api/episode/2?episode=S01E02')
            .end(function (err, res) {
                assert.equal(res.body.episode,"S01E02")

            });
        done();
    });
});
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'https://rickandmortyapi.com';

describe('Get location, episode, character:', () => {
    it('Estatus 200 Location', (done) => {
        chai.request(url)
            .get('/api/location')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                
            });
            done();
    });
    it('Estatus 200 Episode', (done) => {
        chai.request(url)
            .get('/api/episode')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                
            });
            done();
    });
    it('Estatus 200 Character', (done) => {
        chai.request(url)
            .get('/api/character')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                
            });
            done();
    });

});
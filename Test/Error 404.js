let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'https://rickandmortyapi.com';

describe('Get character, location, episode:', () => {
    it('Error 404 Character', (done) => {
        chai.request(url)
            .get('/api/character/?name=pamela')
            .end(function (err, res) {
                
                expect(res).to.have.status(404);
            });
            done();
    });
    it('Error 404 Location', (done) => {
        chai.request(url)
            .get('/api/location?type=pluton')
            .end(function (err, res) {
               
                expect(res).to.have.status(404);
            });
            done();
    });
    it('Error 404 Episode', (done) => {
        chai.request(url)
            .get('/api/episode?episode=S55E02')
            .end(function (err, res) {
                //console.log(err)
                expect(res).to.have.status(404);
            });
            done();
    });
});
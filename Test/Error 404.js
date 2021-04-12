/**
 * @name Estatus 404 no Encontrado
 */
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'https://rickandmortyapi.com';

describe('Get character, location, episode:', () => {
/**
 * Estado 404 para Personajes
 */
    it('Error 404 Character', (done) => {
        chai.request(url)
            .get('/api/character/?name=pamela')
            .end(function (err, res) {
                
                expect(res).to.have.status(404);
            });
            done();
    });
/**
 * Estado 404 para Ubicación
 */
    it('Error 404 Location', (done) => {
        chai.request(url)
            .get('/api/location?type=pluton')
            .end(function (err, res) {
               
                expect(res).to.have.status(404);
            });
            done();
    });
/**
 * Estado 404 para Episodios
 */
    it('Error 404 Episode', (done) => {
        chai.request(url)
            .get('/api/episode?episode=S55E02')
            .end(function (err, res) {
                expect(res).to.have.status(404);
            });
            done();
    });
});
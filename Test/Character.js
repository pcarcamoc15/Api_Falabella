/**
 * @name Personajes
 */
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert    = require("chai").assert;
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'https://rickandmortyapi.com';
/**
 * Estado 200 Api Personajes
 */
describe('Get character:', () => {
    it('Estatus Code 200', (done) => {
        chai.request(url)
            .get('/api/character')
            .end(function (err, res) {
                expect(res).to.have.status(200);
            });
        done();
    });
/**
 * Filtro por Id y nombre de Personaje con comprobación de datos
 * @param string 1
 * @param string Rick Sanchez
 */
    it('id 1 name = Rick Sanchez', (done) => {
        chai.request(url)
            .get('/api/character/1?name=Rick Sanchez')
            .end(function (err, res) {
                assert.equal(res.body.name,"Rick Sanchez")  
            });
        done();
    });
});
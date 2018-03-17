const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../index.js');

describe('index.js', function() {
  describe('/GET batman', function() {
    it('should return at least one batman movie', function() {
      chai.request(app)
      .get('/api?s=batman')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        const data = res.body.Search;
        expect(data.length).to.be.at.least(1);
        expect(data[0].imdbID).to.not.empty;
        expect(data[0].Title).to.not.empty;
        expect(data[0].Year).to.not.empty;
        expect(data[0].Poster).to.not.empty;
      });
    });
  });

  describe('/GET star wars', function() {
    it('should return at least one Star Wars movie', function() {
      chai.request(app)
      .get('/api?s=Star Wars')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        const data = res.body.Search;
        expect(data.length).to.be.at.least(1);
        expect(data[0].imdbID).to.not.empty;
        expect(data[0].Title).to.not.empty;
        expect(data[0].Year).to.not.empty;
        expect(data[0].Poster).to.not.empty;
      });
    });
  });  
});
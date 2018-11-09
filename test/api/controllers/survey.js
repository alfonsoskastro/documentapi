var should = require('should');
var request = require('supertest');
var server = require('../../../app');


describe('controllers', function() {
    describe('survey', function() {
        describe('GET /api/segment', function() {
            it('should return segments', function(done) {
                request(server)
                    .get('/api/segment')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);
                        done();
                    });
            });
        });

    });
});

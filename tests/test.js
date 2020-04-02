var request = require('supertest');
var app = require('../index.js');

describe('GET /', function(){
	it('respond with hello world',function(done) {
		//navigate to root and check response is 'Hello World'
		request(app).get('/').expect('hello world', done);
	});
});

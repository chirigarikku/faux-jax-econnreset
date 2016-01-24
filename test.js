var expect = require('chai').expect;
var faux = require('faux-jax');
var axios = require('axios');

describe('axios-base-url interceptor', function() {
  it('should not append the base-url if request url is absolute', function(done) {
    faux.install();
    axios.get('http://swag.com/hehe').then(done, done);

    faux.on('request', function(request) {
      request.respond(200, { 'Content-Type': 'text/plain' }, '');
      faux.restore();
    });
  });
});
var expect = require('chai').expect;
var faux = require('faux-jax');
var base = require('./');
var axios = require('axios');

describe('axios-base-url interceptor', function() {

  it('should not append the base-url if request url is absolute', function(done) {
    faux.install();
    var url;
    var undo = base('//yolo.com');

    axios.get('http://swag.com/hehe')
      .then(function() {
        console.log(url);
        expect(url).to.contain(/swag.com\/hehe/);
        undo();
      })
      // .then(undo)
      .then(done)
      .catch(console.log);

    faux.on('request', function(request) {
      url = request.requestURL;
      request.respond(200, { 'Content-Type': 'text/plain' }, '');
      faux.restore();
    });
  });

  // it('should append the base-url otherwise', function(done) {
  //   var undo = base('//yolo.com');

  //   server.respondWith([200,
  //     { 'Content-Type': 'application/json' }, ""]);

  //   axios.get('hehe')
  //     .then(function() {
  //       expect(server.requests[0].url).to.contain(/yolo.com\/hehe/);
  //       undo();
  //     })
  //     // .then(undo)
  //     .then(done)
  //     .catch(console.log);

  //   setTimeout(function() {
  //     server.respond();
  //   }, 0);
  // });
});
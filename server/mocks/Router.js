/*jshint node:true*/

module.exports = function(app) {
  var express = require('express');
  var Router = express.Router();



  Router.get('/', function(req, res) {

  });

  Router.post('/', function(req, res) {
    var cmd = req.body.cmd;
    console.log(req.body);
    var sessionValidate = require('../handlers/sessionValidate');
    res = sessionValidate.check(req, res, cmd);

    var handler = require('../handlers/' + cmd);
    res.send(handler.result(req));

  });



  Router.put('/:id', function(req, res) {
    res.send({
      'user': {
        id: req.params.id
      }
    });
  });

  Router.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/user', require('body-parser'));
  app.use('/requests', Router);
};

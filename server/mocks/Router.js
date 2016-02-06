/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var Router = express.Router();



  Router.get('/', function(req, res) {


    res.send({re:"requests"});
  });

  Router.post('/', function(req, res) {
    res.status(201).end();
  });

  Router.get('/:cmd', function(req, res) {
    // console.log(req.params);
    console.log(req.cookies);
    var handler = require('../handlers/' + req.params.cmd);
    var result = handler.result(req);
    res.send({
      result
    });
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

/*jshint node:true*/

module.exports = function(app) {
  var express = require('express');
  var Router = express.Router();



  Router.get('/', function(req, res) {

    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var cmd = query.cmd;
    console.log(cmd);

    var sessionValidate = require('../handlers/sessionValidate');
    res = sessionValidate.check(req, res, cmd);

    var handler = require('../handlers/' + cmd);
    res.send(handler.result(req));
  });

  Router.post('/', function(req, res) {


  });






  // Router.get('/:cmd', function(req, res) {
  //   console.log(req.cookies.sessionId);
  //   if(req.params.cmd === "login"){
  //     res.cookie('sessionId', 'session');
  //   }
  //   else if(req.cookies.sessionId !== undefined){
  //     res.cookie('sessionId', 'session');
  //   }
  //   var handler = require('../handlers/' + req.params.cmd);
  //   res.send(handler.result(req));
  // });

  // Router.get('/listLeaves/:id', function(req, res) {
  //   if(req.cookies.sessionId !== undefined){
  //     res.cookie('sessionId', 'session');
  //   }
  //   var handler = require('../handlers/listLeaves');
  //   res.send(handler.result(req));
  // });

  // Router.get('/log/out', function(req, res) {
  //   res.clearCookie('sessionId');
  //   var handler = require('../handlers/logOut');
  //   res.send(handler.result(req));
  // });

  // Router.get('/quickApprove/:id', function(req, res) {
  //   console.log(req.params);
  //   console.log(req.cookies);
  //   if(req.cookies.sessionId !== undefined){
  //     res.cookie('sessionId', 'session');
  //   }
  //   var handler = require('../handlers/quickApprove');
  //   res.send(handler.result(req));
  // });

  // Router.get('/leaves/:id', function(req, res) {
  //   if(req.cookies.sessionId !== undefined){
  //     res.cookie('sessionId', 'session');
  //   }
  //   var handler = require('../handlers/leaveDetail');
  //   res.send(handler.result(req));
  // });

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

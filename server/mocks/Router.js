/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var Router = express.Router();
  var url = require('url');


  Router.get('/', function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var result = false;
    var staffName = "";
    // console.log(query);
    var users = [
      {
        "staffId": "123",
        "password": "abc",
        "staffName": "testUser1"
      },
      {
        "staffId": "456",
        "password": "aaa",
        "staffName": "testUser2"
      },
      ];

      for(var i=0; i<users.length; i++){
        if(query.staffId.toString() === users[i].staffId.toString() &&
            query.password.toString() === users[i].password.toString()){ 
          result = true;
          staffName = users[i].staffName;
          break;
        }
      }

    res.send({result: result, staffName: staffName });
  });

  Router.post('/', function(req, res) {
    res.status(201).end();
  });

  Router.get('/:id', function(req, res) {
    res.send({
      'user': {
        id: req.params.id
      }
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
  app.use('/userValidation', Router);
};

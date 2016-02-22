var url = require('url');
var session = require('./session');

function getResult(req){
	  var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var staffId = query['data[staffId]'];
    var password = query['data[password]'];

    if(staffId === "222" && password === "aaa"){
      return{
        cmd: "login",
        responseStatus: "success"
      };
    }
    else{
      return {
        cmd: "login",
        responseStatus: "fail"
      };
    }

}

exports.result = getResult;
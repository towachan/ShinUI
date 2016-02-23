var url = require('url');
var session = require('./session');

function getResult(req){
	  var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var staffId = query['data[staffId]'];
    var password = query['data[password]'];

    if(staffId === "222" && password === "aaa" ){
      var sessionId = session.createSession({staffId: "222", staffName: "manager", title: "manager"}); 
      return{
        cmd: "login",
        responseStatus: "success"
      };
    }
    else if(staffId ==="111" && password === "bbb"){
      var sessionId = session.createSession({staffId: "111", staffName: "staff", title: "staff"}); 
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
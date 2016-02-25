var url = require('url');
var session = require('./session');

function getResult(req){

    var staffId = req.body.staffId;
    var password = req.body.password;

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
        responseStatus: "fail",
        errorCode: "LOGINVALIDATE",
        errorMessage: "Your staff ID or password is not right!"
      };
    }

}

exports.result = getResult;
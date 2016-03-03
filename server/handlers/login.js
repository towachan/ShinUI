var url = require('url');
var session = require('./session');

function getResult(req){

    var username = req.body.username;
    var password = req.body.password;
    var loginSystem = req.body.loginSystem;

    if(username === "222" && password === "aaa" ){
      var sessionId = session.createSession({username: "222", staffName: "manager", title: "manager",approverName:"bigManager", system: loginSystem}); 
      return{
        cmd: "login",
        responseStatus: "success"
      };
    }
    else if(username ==="111" && password === "bbb"){
      var sessionId = session.createSession({username: "111", staffName: "staff", title: "staff", approverName: "manager", system: loginSystem}); 
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
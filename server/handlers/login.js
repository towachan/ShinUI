var url = require('url');
var session = require('./session');

function getResult(req){
	  var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var result = false;
    var staffName = "";
    var sessionId = "";
    var userType = "-1";
    // console.log(query);
    var users = [
      {
        "staffId": "1234567",
        "password": "abc",
        "staffName": "testUser1",
        "userType": "0"
      },
      {
        "staffId": "222",
        "password": "aaa",
        "staffName": "testUser2",
        "userType": "1"
      },
      ];

      for(var i=0; i<users.length; i++){
        if(query.staffId.toString() === users[i].staffId.toString() &&
            query.password.toString() === users[i].password.toString()){ 
          result = true;
          staffName = users[i].staffName;
          userType = users[i].userType;
          sessionId = session.createSession({user:users[i]});
          break;
        }
      }

      return {
        result: result,
        data:{
          sessionId: sessionId
        }
      };

}

exports.result = getResult;
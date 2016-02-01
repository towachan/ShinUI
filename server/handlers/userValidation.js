var url = require('url');


function getResult(req){
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

      return {result: result, staffName:staffName};

}

exports.result = getResult;
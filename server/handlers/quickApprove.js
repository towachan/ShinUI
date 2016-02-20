var session = require('./session');
function quickApprove(req){
	var user ={
        "staffId": "222",
        "password": "aaa",
        "staffName": "testUser2",
        "userType": "1"
      };
    sessionId = session.createSession({user:user});
    console.log("qA:" + sessionId);
	return 	{
	result:true,
	data:{
		sessionId: sessionId
	}};
}

exports.result = quickApprove;
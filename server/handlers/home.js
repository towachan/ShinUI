var session = require('./session');

function getSession(req){
	// if(req.cookies.sessionId){
	// 	var sessionData = session.getSession(req.cookies.sessionId.toString()); 
		
	// 	return sessionData;
	// }
	// return false;
	return {
		result:true,
		data:{
			userName:"towa",
			userType:0
		}
	};

}

exports.result = getSession;
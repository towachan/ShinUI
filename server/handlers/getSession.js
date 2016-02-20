var session = require('./session');

function getSession(req){
	if(req.cookies.sessionId){
		var sessionData = session.getSession(req.cookies.sessionId.toString()); 
		
		return {
			result: true,
			data:{
				staffId: sessionData.user.staffId,
				staffName: sessionData.user.staffName,
				userType: sessionData.user.userType
			}
		};
	}
	return {result: false};


}

exports.result = getSession;
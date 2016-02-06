var session = require('./session');

function getSession(req){
	if(req.cookies.sessionId){
		var sessionData = session.getSession(req.cookies.sessionId.toString()); 
		
		return sessionData;
	}
	return false;


}

exports.result = getSession;
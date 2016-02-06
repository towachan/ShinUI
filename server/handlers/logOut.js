var session = require('./session');

function deleteSession(req){
	if(req.cookies.sessionId){
		var result = session.deleteSession(req.cookies.sessionId.toString());
		return result;
	}
	return false;
}


exports.result = deleteSession;
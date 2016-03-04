var session = require('./session');

function deleteSession(req){
	if(req.cookies.JSESSIONID){
		var result = session.deleteSession(req.cookies.JSESSIONID.toString());
		return result;
	}
	return true;
}


exports.result = deleteSession;
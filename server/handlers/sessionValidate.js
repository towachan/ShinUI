
function sessionValidate(req, res, cmd){
	if(cmd === "login"){
		res.cookie('JSESSIONID', "session");
	}
	if(cmd === "logout"){
		res.clearCookie('JSESSIONID');
	}
	else if(req.cookies.sessionId !== undefined){
		res.cookie('JSESSIONID', "session");
	}
	return res;
}

exports.check = sessionValidate;
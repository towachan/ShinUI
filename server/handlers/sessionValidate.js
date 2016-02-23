
function sessionValidate(req, res, cmd){
	if(cmd === "login"){
		res.cookie('sessionId', "session");
	}
	if(cmd === "logout"){
		res.clearCookie('sessionId');
	}
	else if(req.cookies.sessionId !== undefined){
		res.cookie('sessionId', "session");
	}
	return res;
}

exports.check = sessionValidate;
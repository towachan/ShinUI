
function sessionValidate(req, res, cmd){
	if(cmd === "login"){
		res.cookie('JSESSIONID', "session");
	}
	if(cmd === "logout"){
		res.clearCookie('JSESSIONID');
	}
	else if(req.cookies.JSESSIONID !== undefined){
		res.cookie('JSESSIONID', "session");
	}
	return res;
}

exports.check = sessionValidate;
var file = require('./file');
var url = require('url');

function switchSys(req){
	var isLeave = "hehe";

	var sessionData = file.readFile('server/json/sessions/session.json');
	if(sessionData.system === "leave"){
		isLeave = true;
		sessionData.system = "travel";
	}
	else if(sessionData.system === "travel"){
		sessionData.system = "leave";
	}

    file.writeFile('server/json/sessions/session.json', sessionData);

	return {
		responseStatus: "success"
	};
}

exports.result = switchSys;
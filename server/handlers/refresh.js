var session = require('./session');

function getSessionData(req){
	var sessionData = session.getSession("session");

	if(req.cookies.JSESSIONID === undefined){
		return {
			cmd: 'refresh',
			responseStatus: 'fail',
			errorCode: "sessionUnValid",
			errorMessage: "Please Log in."
		};
	}
	return {
		cmd: 'refresh',
		responseStatus: 'success',
		username: sessionData.username,
		staffName: sessionData.staffName,
		title: sessionData.title,
		system: sessionData.system,
		approverName: sessionData.approverName
			
		
	};
	
}



exports.result = getSessionData;
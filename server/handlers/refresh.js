var session = require('./session');

function getSessionData(req){
	var sessionData = session.getSession("session");

	if(req.cookies.sessionId === undefined){
		return {
			cmd: 'refresh',
			responseStatus: 'fail',
			data: {
				user:{

				}
			}
		};
	}
	return {
		cmd: 'refresh',
		responseStatus: 'success',
		staffId: sessionData.staffId,
		staffName: sessionData.staffName,
		title: sessionData.title,
		system: sessionData.system,
		approverName: sessionData.approverName
			
		
	};
	
}



exports.result = getSessionData;
var session = require('./session');

function getUserInfo(req){
	var sessionData = session.getSession("session");

	if(req.cookies.sessionId === undefined){
		return {
			cmd: 'userInfo',
			responseStatus: 'fail',
			data: {
				user:{

				}
			}
		};
	}
	return {
		cmd: 'userInfo',
		responseStatus: 'success',
		data: {
			user:{
				staffId: sessionData.staffId,
				staffName: sessionData.staffName,
				title: sessionData.title
			}
		}
	};
	
}



exports.result = getUserInfo;
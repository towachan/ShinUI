
function getUserInfo(req){
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
				staffId: "123",
				staffName: "testUser1",
				title: "ASE"
			}
		}
	};
	
}



exports.result = getUserInfo;
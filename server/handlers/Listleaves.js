var url = require('url');

function getLeaves(req){
    	return {
    		result: true,
    		data:{
    			leaves:[
				{
					"staffId":"123",
					"staffName":"testUser1",
					"title":"ASE",
					"startDate":"2016/02/23",
					"startHalf":"AM",
					"endDate":"2016/02/25",
					"endHalf":"AM",
					"leaveDays":"5",
					"leaveType":"Annual",
					"comments":"hahahahahha",
					"createTime":"2016/02/18 10:32:14",
					"leaveId":"leave_160218103215",
					"status":"pending"
				}
				]
			}
    	};
    }



exports.result = getLeaves;
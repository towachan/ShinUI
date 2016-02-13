var fs = require('fs');

function getDetail(req){
	var leaveId = req.params.id;
	if(leaveId == 1){
		return {
			result:true,
			data: {
				"userId" : "123",
				"leaveId" : "1",
				"status" : "approved",
				"type" : "annual",
				"startDate" : "2015-9-15",
				"endDate" : "2015-9-16"
			}
		};
	}
	else{
		return  {
			result:true,
			data: {
				"userId" : "123",
				"leaveId" : "2",
				"status" : "pending",
				"type" : "sick",
				"startDate" : "2015-9-15",
				"endDate" : "2015-9-16"
			}
		}
	}


}


exports.result = getDetail;
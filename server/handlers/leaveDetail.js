var fs = require('fs');

function getDetail(req){
	var leaveId = req.params.id;
	return 	{result:true,
			data:{
				currentUserAction: {
					"isSubmit" : false,
					"isCancel" : false,
					"isApprove" : true,
					"isReject" : true
				},
				user: {
					"staffId":"1234567",
					"staffName":"testUser1",
					"title":"ASE"
				},
				leave: {
					"startDate":"2016/02/23",
					"startHalf":"AM",
					"endDate":"2016/02/25",
					"endHalf":"AM",
					"leaveDays":"5",
					"leaveType":"Annual",
					"comments":"hahahahahha",
					"createTime":"2016/02/18 10:32:14",
					"leaveId":"leave_160218103215",
					"status":"pending",
					"approverId": "222"
				}
			}};
	// if(leaveId == 1){
	// 	return {
	// 		result:true,
	// 		data: {
	// 			"userId" : "123",
	// 			"leaveId" : "1",
	// 			"status" : "approved",
	// 			"type" : "annual",
	// 			"startDate" : "2015-9-15",
	// 			"endDate" : "2015-9-16"
	// 		}
	// 	};
	// }
	// else{
	// 	return  {
	// 		result:true,
	// 		data: {
	// 			"userId" : "123",
	// 			"leaveId" : "2",
	// 			"status" : "pending",
	// 			"type" : "sick",
	// 			"startDate" : "2015-9-15",
	// 			"endDate" : "2015-9-16"
	// 		}
	// 	}
	// }


}


exports.result = getDetail;
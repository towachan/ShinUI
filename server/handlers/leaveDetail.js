var fs = require('fs');
var url = require('url');
var file = require('./file');

function getDetail(req){
	var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var leaveId = query['data[leaveId]'];
	var fileData = file.readFile('server/json/leaves/111/'+ leaveId +'.json');
	return 	{
			responseStatus: 'success',
			data:{
				leave: fileData
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
var fs = require('fs');
var url = require('url');
var file = require('./file');

function getDetail(req){

    var leaveId = req.body.leaveId;
	var fileData = file.readFile('server/json/leaves/111/'+ leaveId +'.json');
	return 	{
			responseStatus: 'success',
			leave: fileData
			};
}


exports.result = getDetail;
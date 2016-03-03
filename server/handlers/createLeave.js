var url = require('url');
var fs = require('fs');
var file = require('./file');

function generateId()
{
	var date = new Date();
	var currentTime = addZero(date.getFullYear().toString().substring(2,4)) 
						+ addZero((date.getMonth()+1).toString())
						+ addZero(date.getDate().toString())
						+ addZero(date.getHours().toString())
						+ addZero(date.getMinutes().toString())
						+ addZero(date.getSeconds().toString());
	return "leave_" + currentTime;
}

function addZero(str){
	if(str.length==1){
		str = '0' + str;
	}
	return str;
}

function createLeave(req){

    var leaveId = generateId();

    var leave = req.body.leave;
	leave.leaveId = leaveId;
	if(req.body.createType === "save"){
		leave.status = "draft";
	}
	else{
		leave.status = "pending";
	}
	leave.requestorId = leave.requestorId;
	leave.requestorName = leave.requestorName;
	leave.approverId = "222";
	leave.approverName = "manager";
 

	var leaveFile = 'server/json/leaves/' + leave.requestorId + '/' + leaveId.toString() + '.json';
	fs.writeFileSync(leaveFile,JSON.stringify(leave));
	var approveLink = "http://133.13.136.137:4200/quickApprove?leaveId=" + leaveId;

	return {
		responseStatus: 'success',
		approveLink: approveLink
		
	};
}

exports.result = createLeave;
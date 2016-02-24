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
	var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var leaveId = generateId();

    var leave = {};
	leave.leaveId = leaveId;
	leave.status = "pending";
	leave.staffId = query['data[staffId]'];
	leave.staffName = query['data[staffName]'];
	leave.title = query['data[title]'];
	leave.startHalf = query['data[startHalf]'];
	leave.startDate = query['data[startDate]'];
	leave.endHalf = query['data[endHalf]'];
	leave.endDate = query['data[endDate]'];
	leave.leaveDays = query['data[leaveDays]'];
	leave.leaveType = query['data[leaveType]'];
	leave.comments = query['data[comments]'];
	leave.createTime = query['data[createTime]'];
	leave.requestorId = leave.staffId;
	leave.requestorName = leave.staffName;
	leave.approverId = "222";
 

	var leaveFile = 'server/json/leaves/' + leave.staffId + '/' + leaveId.toString() + '.json';
	fs.writeFileSync(leaveFile,JSON.stringify(leave));
	var approveLink = "http://133.13.136.137:4200/quickApprove?leaveId=" + leaveId;

	return {
		responseStatus: 'success',
		data: {
			approveLink: approveLink
		}
	};
}

exports.result = createLeave;
var file = require('./file');
var url = require('url');

function approveLeave(req){

    var leaveId = req.body.leaveId;
    var comments = req.body.comments;

    var leave = file.readFile('server/json/leaves/111/' + leaveId + '.json');
    leave.status = "cancelled";
    leave.cancelComments = comments;
    file.writeFile('server/json/leaves/111/' + leaveId + '.json', leave);

	return {
		responseStatus: "success"
	};
}

exports.result = approveLeave;
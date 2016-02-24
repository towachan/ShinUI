var file = require('./file');
var url = require('url');

function approveLeave(req){
	var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var leaveId = query['data[leaveId]'];
    var comments = query['data[comments]'];

    var leave = file.readFile('server/json/leaves/111/' + leaveId + '.json');
    leave.status = "approved";
    leave.appvalComments = comments;
    file.writeFile('server/json/leaves/111/' + leaveId + '.json', leave);

	return {
		responseStatus: "success"
	};
}

exports.result = approveLeave;
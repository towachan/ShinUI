var file = require('./file');
var url = require('url');

function approveLeave(req){

    var comments = req.body.comments;
    var leaves = req.body.leaves;

    for(var i=0; i<leaves.length; i++){
	    var leave = file.readFile('server/json/leaves/111/' + leaves[i] + '.json');
	    leave.status = "approved";
	    leave.approveComments = comments;
	    file.writeFile('server/json/leaves/111/' + leaves[i] + '.json', leave);
    	
    }

	return {
		responseStatus: "success"
	};
}

exports.result = approveLeave;
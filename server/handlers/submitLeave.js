var file = require('./file');
var url = require('url');

function submitLeave(req){

    var comments = req.body.comments;

    var leaves = req.body.leaves;

    for(var i=0; i<leaves.length; i++){
	    var leave = file.readFile('server/json/leaves/111/' + leaves[i] + '.json');
	    leave.status = "pending";
	    if(leave.comments){
		    leave.comments = leave.comments + " " + comments;
	    }
	    else{
			leave.comments = comments
	    }
	    file.writeFile('server/json/leaves/111/' + leaves[i] + '.json', leave);
    	
    }

	return {
		responseStatus: "success"
	};
}

exports.result = submitLeave;
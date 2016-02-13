var url = require('url');

function getLeaves(req){
    	return {
    		result: true,
    		data:{
    			leaves:[
    			{
					"user" : "123",
					"leaveId" : "1",
					"status" : "approved",
					"type" : "annual",
					"startDate" : "2015-9-15",
					"endDate" : "2015-9-16"
				},
				{
					"user" : "123",
					"leaveId" : "2",
					"status" : "approved",
					"type" : "sick",
					"startDate" : "2015-10-15",
					"endDate" : "2015-10-16"
				}]
			}
    	};
    }



exports.result = getLeaves;
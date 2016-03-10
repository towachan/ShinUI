var file = require('./file');
var session = require('./session');

function getDashBoard(req){
   	var fileData = file.readDir('server/json/leaves/111/');
	var sessionData = session.getSession('session');
	
	var annual = {	type: "annual",
					draft: 0,
					pending: 0,
					approved: 0,
					rejected: 0,
					cancelled: 0,
				};
	var sick = {	type: "sick",
					draft: 0,
					pending: 0,
					approved: 0,
					rejected: 0,
					cancelled: 0,
				};
	var len=0;
   	for(var p in fileData){
   		len++;
   	}

   	for(var i=0; i<len; i++){
   		if(fileData[i].leaveType === "annual"){
   			if(fileData[i].status === "draft"){ annual.draft++; }
   			if(fileData[i].status === "pending"){ annual.pending++; }
   			if(fileData[i].status === "approved"){ annual.approved++; }
   			if(fileData[i].status === "rejected"){ annual.rejected++; }
   			if(fileData[i].status === "cancelled"){ annual.cancelled++; }
   		}
   		if(fileData[i].leaveType === "sick"){
   			if(fileData[i].status === "draft"){ sick.draft++; }
   			if(fileData[i].status === "pending"){ sick.pending++; }
   			if(fileData[i].status === "approved"){ sick.approved++; }
   			if(fileData[i].status === "rejected"){ sick.rejected++; }
   			if(fileData[i].status === "cancelled"){ sick.cancelled++; }
   		}

   	}

   	
	if(sessionData.username === "111"){

		return {
			responseStatus: "success",
			createdByMe:[annual,sick],
			pendOnMe:[
				{	type: "annual",
					draft: 0,
					pending: 0,
					approved: 0,
					rejected: 0,
					cancelled: 0,


				},
				{	type: "sick",
					draft: 0,
					pending: 0,
					approved: 0,
					rejected: 0,
					cancelled: 0,

				}
				
			]
		};
	}
	else{
		return {
			responseStatus: "success",
			pendOnMe:[annual,sick],
			createdByMe:[
				{	type: "annual",
					draft: 0,
					pending: 0,
					approved: 0,
					rejected: 0,
					cancelled: 0,


				},
				{	type: "sick",
					draft: 0,
					pending: 0,
					approved: 0,
					rejected: 0,
					cancelled: 0,

				}
				
			]
		};
	}
	
}

exports.result = getDashBoard;
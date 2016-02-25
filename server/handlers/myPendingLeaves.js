var url = require('url');
var file = require('./file');
var session = require('./session');

function getLeaves(req){
   var sessionData = session.getSession('session');
   var fileData = file.readDir('server/json/leaves/111/');
   var leaves = [];
   var j = 0;
   for(var i=0;i<fileData.length;i++){
   		if(fileData[i].status === "pending"){
   			leaves[j] = fileData[i];
   			j++;
   		}
   }

   if(sessionData.staffId === "111"){
	   	return {
	    		responseStatus: "success",
	    		leaves: leaves
	    		
	   	};
   }
   else{
      	return {
    		responseStatus: "success",

   		};

   }
   


   // return {
   // 		responseStatus: "Fail",
   // 		errorMessage: "List Leaves Fail!"
   // };
}



exports.result = getLeaves;
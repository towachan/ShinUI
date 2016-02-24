var url = require('url');
var session = require('./session');
var file = require('./file');


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

   if(sessionData.staffId === "222"){
	   	return {
	    		responseStatus: "success",
	    		data:{
	    			leaves: leaves
	    		}
	   	};
   }
   else{
      	return {
    		responseStatus: "success",
    		data:{}
   		};

   }
   


   // return {
   // 		responseStatus: "Fail",
   // 		errorMessage: "List Leaves Fail!"
   // };
}



exports.result = getLeaves;
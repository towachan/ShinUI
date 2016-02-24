var url = require('url');
var session = require('./session');
var file = require('./file');

function getLeaves(req){
   var sessionData = session.getSession('session');
   var fileData = file.readDir('server/json/leaves/111/');


   if(sessionData.staffId === "111"){
	   	return {
	    		responseStatus: "success",
	    		data:{
	    			leaves: fileData
				}
	   }
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
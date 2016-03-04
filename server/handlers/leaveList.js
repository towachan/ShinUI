var session = require('./session');
var file = require('./file');

function getList(req){
	var category = req.body.category;
	var status = req.body.status;
	var type = req.body.type;

	var sessionData = session.getSession('session');
   	var fileData = file.readDir('server/json/leaves/111/');

   	var arr = [];
   	var j =0;
   	var len=0;
   	for(var p in fileData){
   		len++;
   	}

   	for(var i=0; i< len	; i++){
         if(fileData[i].status != "sample"){
            if(type === "total" &&  status === "total"){
               arr[j] = fileData[i];
               j++;
            }
            else if(type === "total"){
               if(fileData[i].status === status ){
                  arr[j] = fileData[i];
                  j++;
               }
            }
            else if(status === "total"){
               if(fileData[i].leaveType === type ){
                  arr[j] = fileData[i];
                  j++;
               }
            }
      		else if(fileData[i].status === status && fileData[i].leaveType === type){
      			arr[j] = fileData[i];
      			j++;
      		}
         }
   	}

   			console.log(typeof category);
   			console.log(typeof sessionData.username);
   	if( (category === "createdByMe" && sessionData.username === "111") || (category === "pendOnMe" && sessionData.username === "222") ){
   		return {
   			responseStatus: "success",
   			leaves: arr
   		};
   	}
   	else {
      	return {
    		responseStatus: "success",
   		};
   	}
}


exports.result = getList;
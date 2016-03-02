var fs = require('fs');


function writeFile(fileName, data){
	fs.writeFileSync(fileName,JSON.stringify(data));
}

function readFile(fileName){
	if(fs.existsSync(fileName)){
		var data = JSON.parse(fs.readFileSync(fileName, 'utf8'));
		return data;
	}
	return false;
}

function readDir(path){
	if(fs.existsSync(path)){
		var files = fs.readdirSync(path);
		var data = [];
		for(var i=0;i<files.length;i++){


			data[i] = JSON.parse(fs.readFileSync(path+files[i], 'utf8'));
			
		}
		return data;
	}
	return false;
}


exports.readFile = readFile;
exports.writeFile = writeFile;
exports.readDir = readDir;
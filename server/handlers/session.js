var fs = require('fs');

function generateId()
{
	var date = new Date();
	var currentTime = addZero(date.getFullYear().toString().substring(2,4)) 
						+ addZero((date.getMonth()+1).toString())
						+ addZero(date.getDate().toString())
						+ addZero(date.getHours().toString())
						+ addZero(date.getMinutes().toString())
						+ addZero(date.getSeconds().toString());
	return currentTime;
}

function addZero(str){
	if(str.length==1){
		str = '0' + str;
	}
	return str;
}

function createSession(session){
	var sessionId = generateId();
	session.sessionId = sessionId;
	var sessionFile = 'server/json/sessions/' + sessionId.toString() + '.json'
	fs.writeFileSync(sessionFile,JSON.stringify(session));
	return sessionId;
}

function getSession(sessionId){
	var sessionFile = 'server/json/sessions/' + sessionId.toString() + '.json';
	// var session = {};
	if(fs.existsSync(sessionFile)){
		var session = JSON.parse(fs.readFileSync(sessionFile, 'utf8'));
		return session;
	}
	return false;
}

function deleteSession(sessionId){
	var sessionFile = 'server/json/sessions/' + sessionId.toString() + '.json';
	if(fs.existsSync(sessionFile)){
		fs.unlinkSync(sessionFile);
		return true;
	}
	return false;
}


exports.getSession = getSession;
exports.createSession = createSession;
exports.deleteSession = deleteSession;
function incomingCall(){
	console.log("Request handler for 'incoming-call' called");
}

function deny(){
	console.log("Forbidden");
}

function favicon(){

}
exports.incomingCall = incomingCall;
exports.deny = deny;
exports.favicon = favicon;

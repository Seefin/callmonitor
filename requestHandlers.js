function incomingCall(){
	console.log("Request handler for 'incoming-call' called");
}

function deny(){
	console.log("Forbidden");
}

exports.incomingCall = incomingCall;
exports.deny = deny;

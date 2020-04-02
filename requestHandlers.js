function incomingCall(res){
	console.log("Request handler for 'incoming-call' called");
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello World");
	res.end();
}

function deny(res){
	console.log("Forbidden");
	res.writeHead(403,{"Content-Type":"text/plain"});
	res.write("no.");
	res.end()
}
function oAuthCallback(res){
	console.log("oAuth Callback called");
}

function favicon(res){

}
exports.incomingCall = incomingCall;
exports.deny = deny;
exports.favicon = favicon;
exports.oauth = oAuthCallback;

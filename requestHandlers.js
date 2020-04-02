var url = require("url");

function incomingCall(res, req){
	console.log("Request handler for 'incoming-call' called");
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello World");
	res.end();
}

function deny(res, req){
	console.log("Forbidden");
	res.writeHead(403,{"Content-Type":"text/plain"});
	res.write("no.");
	res.end()
}
function oAuthCallback(res, req){
	console.log("oAuth Callback called");
	var myURL = url.parse(req.url);
	var code = myURL.searchParams.get('code');
	var state = myURL.searchParams.get('state');
	
	console.log("Auth code is: " + code);
	console.log("Auth state is: " + state);
}

function favicon(res){

}
exports.incomingCall = incomingCall;
exports.deny = deny;
exports.favicon = favicon;
exports.oauth = oAuthCallback;

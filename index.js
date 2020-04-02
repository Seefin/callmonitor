var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/incoming-call"] = requestHandlers.incomingCall;
handle["/favicon.ico"] = requestHandlers.favicon;
handle["deny"] = requestHandlers.deny;
handle["oAuth-callback"] = requestHandlers.oauth;

server.start(router.route, handle);

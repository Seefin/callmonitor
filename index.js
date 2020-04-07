var server = require("./modules/server");
var router = require("./modules/router");
var requestHandlers = require("./modules/requestHandlers");

var handle = {};
handle["/incoming-call"] = requestHandlers.incomingCall;
handle["/favicon.ico"] = requestHandlers.favicon;
handle["deny"] = requestHandlers.deny;
handle["/oAuth-callback"] = requestHandlers.oauth;
handle["serve"] = requestHandlers.serve;
server.start(router.route, handle);

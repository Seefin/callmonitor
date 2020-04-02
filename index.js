var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/incoming-call"] = requestHandlers.incoming-call;
handle["default"] = requestHandlers.default-deny;

server.start(router.route, handle);

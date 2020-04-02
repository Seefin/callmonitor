var http = require("http")

http.createServer(function(Request,Response){
	Response.writeHead(200,{"Content-Type":"text/plain"});
	Response.write("Hello World");
	Response.end();
}).listen(80);

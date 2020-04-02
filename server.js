const https = require("https");
const fs = require('fs');
var url = require("url");


function start(route, handle) {
	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;
		console.log("Request for "+pathname+" recieved.");
		
		route(handle, pathname, res, req);
	}

	const certdir = "callmonitor.connorfindlay.com";
	const httpsServer = https.createServer({
		key: fs.readFileSync(`/etc/letsencrypt/live/${certdir}/privkey.pem`),
		cert: fs.readFileSync(`/etc/letsencrypt/live/${certdir}/fullchain.pem`), 
		ciphers: ["ECDHE-ECDSA-AES256-GCM-SHA384","ECDHE-RSA-AES256-GCM-SHA384",
			"ECDHE-ECDSA-CHACHA20-POLY1305","ECDHE-RSA-CHACHA20-POLY1305",
			"ECDHE-ECDSA-AES128-GCM-SHA256","ECDHE-RSA-AES128-GCM-SHA256",
			"ESDHE-ECDSA-AES256-SHA384","ECDHE-RSA-AES256-SHA384",
			"ECDHE-ECDSA-AES128-SHA256","ECHED-RSA-AES128-SHA256"].join(':')
	}, onRequest).listen(443);
	console.log("Server started.");
}

exports.start = start;

const https = require("https");
const fs = require('fs');
var url = require("url");

//set https to use TLSv1.3 if available
https.DEFAULT_MAX_VERSION = 'TLSv1.3';

//Start https server
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
		dhparam: fs.readFileSync(`/etc/letsencrypt/live/${certdir}/dh-strong.pem`),
		ciphers: ["TLS_AES_256_GCM_SHA384","TLS_CHACHA20_POLY1305_SHA256", "TLS_AES_128_GCM_SHA256","TLS_AES_128_CCM_SHA256", "TLS_AES_128_CCM_8_SHA256","ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384","ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-CHACHA20-POLY1305","ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-RSA-AES128-GCM-SHA256","ESDHE-ECDSA-AES256-SHA384", "ECDHE-ECDSA-AES128-SHA256","ECHED-RSA-AES128-SHA256"].join(':'),
		honorCipherOrder: true//,
		//requestCert: true,
		//rejectUnauthorized: false, //Perform our own error handling
		//ca: [
			//fs.readFileSync(`/etc/letsencrypt/live/${certdir}/server-cert.pem`)
		//]
	}, onRequest).listen(443);
	console.log("Server started.");
	
	//Allow TLS session caching
	var tlsSessionStore = {}
	httpsServer.on('newSession', function(id, data, cb){
		tlsSessionStore[id.toString("hex")] = data;
		cb();
	});
	httpsServer.on('resumeSession', function (id,cb){
		var tlsSessionId = id.toString("hex");
		cb(null, (tlsSessionId in tlsSessionStore) ? tlsSessionStore[tlsSessionId] : null);
	});
}

exports.start = start;

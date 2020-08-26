/** INDEX.js - start server.
 *
 * This script uses the server I built in server.js and passes in routing 
 * for the web app we want to build as objects.
 * 
 * Routes are specified in this file as properties on an object passed to the
 * server.start function. Routes take the form of associative arrays (this is
 * JS after all) where the route is the key, and the associated function for 
 * handling the request is the value. Functions are in requestHandlers.js and
 * are exported as public functions from that module.
 *
 * E.G: the favicon.ico route that all modern browsers seem to try is handled by 
 * a function called favicon in requestHandlers. To map the route to the function, 
 * we do:
 * 	handle["/favicon.ico"] = requestHandlers.favicon;
 * 
 * @author Connor Findlay <connor dot findlay at gmail.com>
 * @version 1.0
 */
var server = require("server");
var router = require("router");
var requestHandlers = require("requestHandlers");

//Object for storing supported routes; maps routes to handler functions in the 
// requesthandlers module.
var handle = {};

// PUBLIC ROUTES - these are accesible from external machines at https://<address.com>/<handler key>
handle["/incoming-call"] = requestHandlers.incomingCall;
handle["/favicon.ico"] = requestHandlers.favicon;
handle["/oAuth-callback"] = requestHandlers.oauth;
handle["/authenticate"] = requestHandlers.cert;

//PRIVATE ROUTES - these are for internal routing and can't be accessed directly via the 
// browser - I think.
handle["serve"] = requestHandlers.serve;
handle["deny"] = requestHandlers.deny;

//Start the server, supporting the specified routes above.
server.start(router.route, handle);

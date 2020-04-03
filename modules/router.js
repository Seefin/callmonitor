function route(handle, pathname, res, req){
	console.log("Routing request for "+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](res, req);
	} else {
		console.log("No handler for "+pathname+". Default used.");
		handle["deny"](res, req);
	}
}

exports.route = route;

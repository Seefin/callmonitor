function route(handle, pathname, res){
	console.log("Routing request for "+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](res);
	} else {
		console.log("No handler for "+pathname+". Default used.");
		handle["deny"](res);
	}
}

exports.route = route;

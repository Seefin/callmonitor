function route(handle, pathname){
	console.log("Routing request for "+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname]();
	} else {
		console.log("No handler for "+pathname+". Default used.");
		handle["deny"]();
	}
}

exports.route = route;

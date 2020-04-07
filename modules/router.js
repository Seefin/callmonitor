//List all static content to be served here.
const staticPages = [
	"recipes/bread/rusticLoaf.html",
	"recipes/bread/fougasse.html"
];

function route(handle, pathname, res, req){
	console.log("Routing request for "+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](res, req);
	} else if (staticPages.includes(pathname)){
		handle["serve"](res,req);
		console.log("Serving static page for " + pathname);
	} else {
		console.log("No handler for " + pathname);
		handle["deny"](res, req);
	}
}

exports.route = route;

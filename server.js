// Load the express module
var express = require("express");
var app = express()
// Load path
var path = require("path");
app.use(function(request, response, next) {
	// Set header to allow CORS. PUT,DELETE, and POST would need to be controlled through a login.
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	response.header("Access-Control-Allow-Methods", "PUT,DELETE");
	next();
});
// get body parser and use it
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// set the angular static file location
app.use(express.static(path.join(__dirname, './dist')));
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the routes function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the routes function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.all("*", (req,res,next) => {
	res.sendFile(path.resolve("./dist/index.html"))
});
// Start Node server listening on port specified by environment variable if defined, port 8000 otherwise.
var server = app.listen(process.env.PORT || 8000, function() {
	console.log(process.env.PORT || 8000);
});
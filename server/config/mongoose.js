// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// connect to mongoose!
var mongoUrl = "mongodb://localhost/authors"

mongoose.connect(mongoUrl)
	.then(res => console.log("Connected to DB"))
	.catch(err => { console.log('Error connecting to db');
				  });

// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		// require the file (this runs the model file which registers the schema)
		require(models_path + '/' + file);
	}
});
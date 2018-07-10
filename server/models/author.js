// require mongoose
var mongoose = require('mongoose');
// setup author schema
var AuthorSchema = new mongoose.Schema({
	first_name: { type: String,
				  required: [true, "First name is required."],
				  minlength: [2, "First name must be at least 2 characters."],
				  trim: true},
	last_name: 	{ type: String,
				  required: [true, "Last name is required."],
				  minlength: [2, "Last name must be at least 2 characters."],
				  trim: true},
	country: 	{ type: String,
				  required: [true, "Country is required."],
				  minlength: [3, "Country must be at least 3 characters."],
				  trim: true},
	birthyear: 	{ type: Number,
				  required: [true, "Birth year is required."]},
	deathyear: 	{ type: Number,
				  validate: [{ validator: function( deathyear ) {console.log("VALIDATE", deathyear, this.birthyear);return ((deathyear > this.birthyear) && ((deathyear-150)<this.birthyear));
				  										   },message: "Year of death must be greater than year of birth and authors age must be less than 150."}]},
	books: 		[{
				   title: { type: String,
							required:[true, "Title is required."],
							minlength: [2, "Book title must be at least 2 characters."]},
				   year: {	type: Number,
							required: [true, "Book year is required."],
							validate: [{ validator: function( year ) {return year < new Date().getFullYear();},message: "Book year must be in the past."}]
						 }
				}]
	},{
	timestamps: { createdAt: 'created_at',
				  updatedAt: 'updated_at'}
});

var AuthorSchema = mongoose.model('Author', AuthorSchema);
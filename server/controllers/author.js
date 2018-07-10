function prettifyErrors(errors) {
	let error = Object.keys(errors).map(key => {
		return errors[key].message;
	});
	return {"error":error};
}
var mongoose = require('mongoose');
var Author = mongoose.model('Author');
module.exports = {
	show: function(request, response) {
		if (request.params.id) {
			Author.findOne({_id:request.params.id})
				.then(function(author) {
					response.json(author);
				})
				.catch(function(error) {
					response.json(prettifyErrors(error.errors));
				})
		} else { 
			Author.find()
				.then(function(author) {
					response.json(author);
				})
				.catch(function(error) {
					response.json(prettifyErrors(error.errors));
				})
		}
	},
	create: function(request, response) {
		var author = new Author({first_name:request.body.first_name,
								 last_name:request.body.last_name,
								 country:request.body.country,
								 birthyear:request.body.birthyear,
								 deathyear:request.body.deathyear});
		author.save()
			.then(function() {
				response.json({status:"okay"});
			})
			.catch(function(error) {
				response.json(prettifyErrors(error.errors));
			})
	},
	update: function(request, response) {
		Author.findOne({_id:request.params.id})
			.then(function(author) {
				author.first_name = request.body.first_name;
				author.last_name = request.body.last_name;
				author.country = request.body.country;
				author.birthyear = request.body.birthyear;
				author.deathyear = request.body.deathyear;
				author.books = request.body.books;
				author.save()
					.then(function() {
						response.json({status:"okay"});
					})
					.catch(function(error) {
						response.json(prettifyErrors(error.errors));
					})
			})
			.catch(function(error) {
				response.json(prettifyErrors(error.errors));
			})
		
	},
	deleteAuthor: function(request, response) {
		Author.remove({_id:request.params.id})
			.then(function() {
				response.json({status:"okay"});
			})
			.catch(function(error) {
				response.json(prettifyErrors(error.errors));
			})
	},
	deleteBook: function(request, response) {
		Author.update({ },
					  { $pull: { books: { _id: request.params.id } } },
					  { multi: true })
			.then(function(author) {
				response.json({status:"okay"});
			})
			.catch(function(error) {
				response.json(prettifyErrors(error.errors));
			})
	}
}
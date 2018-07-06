// here we load the Book controller
var author = require('../controllers/author.js');
module.exports = function(app) {
	// root route to display all authors or just one if optional id param supplied
	app.get("/books_api/authors/:id?/", function (request, response, next) {
		author.show(request, response);
	})
	// route to insert author
	app.post("/books_api/authors/", function (request, response, next) {
		author.create(request, response);
	})
	// route to update author. new book can be included {"book":{"title":"title","year":"year"}}
	app.put("/books_api/authors/:id/", function (request, response, next) {
		author.update(request, response);
	})
	// route to delete author by id
	app.delete("/books_api/authors/:id/", function (request, response, next) {
		author.deleteAuthor(request, response);
	})
	// route to delete book from author. id is the id of the book
	app.delete("/books_api/books/:id/", function (request, response, next) {
		author.deleteBook(request, response);
	})
}
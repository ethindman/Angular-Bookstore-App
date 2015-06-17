var books = require('./../server/controllers/books.js');

module.exports = function(app) {
	
	// show all books
	app.get('/books', function(request, response) {
		books.retrieve(request, response);
	});

	// show one book
	app.get('/:id', function(request, response) {
		books.show(request, response);
	});

	// create book
	app.post('/books/create', function(request, response) {
		books.add(request, response);
	});

	// destroy book
	app.post('/books/delete', function(request, response) {
		books.destroy(request, response);
	});

	// update book
	app.post('/books/:id', function(request, response) {
		books.update(request, response);
	});

};
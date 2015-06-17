app.factory('Book', function($http) {

	var books = [];
	var factory = {};

	// get books
	factory.getBooks = function(callback) {
		$http.get('/books').success(function(data) {
			books = data;
			callback(books);
		});
	};

	// show one book
	factory.show = function(id, callback) {
		$http.get('/'+id).success(function(book) {
			callback(book);
		});
	};

	// create book
	factory.addBook = function(data, callback) {
		$http.post('/books/create', data).success(function(data) {
				books.push(data);
				callback(books);
			});
	};

	// destroy book
	factory.removeBook = function(book, getAll) {
		$http.post('/books/delete', book).success(function(book) {
			books.splice(books.indexOf(book), 1);
			getAll(books);
		});
	};

	// update book
	factory.update = function(book, callback) {
		$http.post('/books/'+book._id, book).success(function() {
			// do something later
		});
	}

	return factory;

});
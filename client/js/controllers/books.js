app.controller('BooksCtrl', function($scope, Book) {
	
	console.log("Getting all books");

	Book.getBooks(function(data) {
		$scope.books = data;
	});

	$scope.removeBook = function(book) {
		Book.removeBook(book, function() {
			Book.getBooks(function(data) {
				$scope.books = data;
			});
		});
	};

});
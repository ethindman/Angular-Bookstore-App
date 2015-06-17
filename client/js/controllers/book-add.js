app.controller('BookAddCtrl', function($scope, Book) {

	console.log("adding a book");

	$scope.addBook = function() {
		Book.addBook($scope.newBook, function() {
			Book.getBooks(function(data) {
				$scope.books = data;
			});
			$scope.newBook = {};
		});
	};

});
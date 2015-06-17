app.controller('BookEditCtrl', function($scope, $routeParams, $location, Book) {

	Book.show($routeParams.id, function(book) {
		$scope.current_book = book;
	});

	$scope.updateBook = function(book) {
		Book.update(book, function() {
			// do something later
		});
	};

});
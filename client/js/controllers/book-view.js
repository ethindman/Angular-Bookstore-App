app.controller('BookViewCtrl', function($scope, $routeParams, Book) {

	Book.show($routeParams.id, function(book) {
		$scope.current_book = book;
	});

});
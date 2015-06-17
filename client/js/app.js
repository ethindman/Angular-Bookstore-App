// set up app module
var app = angular.module('bookApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'BooksCtrl'
	})
	.when('/create/book', {
		templateUrl: 'views/book-add.html',
		controller: 'BookAddCtrl'
	})
	.when('/book/:id',{
    templateUrl: 'views/book-view.html',
		controller: 'BookViewCtrl'
  })
  .when('/book/:id/edit',{
    templateUrl: 'views/book-edit.html',
		controller: 'BookEditCtrl'
  })
	.otherwise({
		redirectTo: '/'
	});
});
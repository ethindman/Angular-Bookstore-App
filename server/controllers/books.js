var mongoose = require('mongoose');
// var should be singular and capitalized
var Book = mongoose.model('Book');

module.exports = (function (){
	return {
	
	// get books
	retrieve: function(request, response) {
		Book.find({}, function(error, data) {
			if(error) {
				console.log(error);
			}
			else {
				response.json(data);
			}
		});
	},

	// show one book
	show: function(request, response) {
		if (request.params.id.match(/^[0-9a-fA-F]{24}$/)) {
			Book.findById(request.params.id, function(error, book) {
				if(error) {
					console.log(error);
				}
				else {
					response.json(book);
				}
			});
		}
	},

	// add book
	add: function(request, response) {
		var now = new Date();
		var book = new Book({
			title: request.body.title, author: request.body.author, description: request.body.description, created_at: now
		});
		console.log(book);

		book.save(function(error) {
			if(error) {
				console.log(error);
			}
			else {
				console.log("New book added!");
				response.json(book);
			}
		});
	},

	// destroy book
	destroy: function(request, response) {
		Book.remove({_id: request.body._id}, function(error, data) {
			if(error) {
				console.log(error);
			}
			else {
				console.log("Book deleted!");
				response.json(request.body);
			}
		});
	},

	// update book
	update: function(request, response) {
		Book.findByIdAndUpdate(request.body._id, { 
			$set: request.body }, function(error, book) {
				
				if(error) {
					console.log(error);
				}
				else {
					console.log("Update successful!");
					response.json(book);
				}

			});
		}

	};
})();
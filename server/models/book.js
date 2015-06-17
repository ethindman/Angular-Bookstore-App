var mongoose = require('mongoose');

// declares schema
var bookSchema = new mongoose.Schema({
	author: String,
	title: String,
	description: String,
	created_at: Date
});

// creates collection 'friends' (plural) using friendSchema
mongoose.model('Book', bookSchema);

// // create form validations
// BookSchema.path('title').required(true, 'Title cannot be blank');
// BookSchema.path('author').required(true, 'Author field cannot be blank');
// BookSchema.path('description').required(true, 'Description cannot be blank');
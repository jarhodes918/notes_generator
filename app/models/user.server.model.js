// Load the mongoose module
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Create user schema
var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true,
		validate: [
			function(password) {
				return password.length >= 8;
			}, 'Password must be 8 or more characters'
		]
	},
	created: {
		type: Date,
		default: Date.now
	}
});

// Create mongoose model
mongoose.model('User',UserSchema);

// Create post schema
var PostSchema = new Schema({
	title: String,
	commenent: String,
	author: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

// Create post model
mongoose.model('Post',PostSchema);

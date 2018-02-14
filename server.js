// Configure the environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the express module
var mongoose = require('./config/mongoose'),
	express = require('./config/express');

// Create an mongoose instance
var db = mongoose();

// Create an express instance
var app = express();

// Listen port 3000
app.listen(3000);

// Export the express application
module.exports = app;

// Log a message on the console
console.log('Server running at http://localhost:3000/');

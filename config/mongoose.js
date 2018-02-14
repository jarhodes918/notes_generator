// Require configuration
var config = require('./config'),
	mongoose = require('mongoose');

// Export mongoose module
module.exports = function() {
	var db = mongoose.connect(config.db);
	
	// Require note model	
	require('../app/models/note.server.model');
	
	return db;
};

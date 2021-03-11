// Import Mongoose
const mongoose = require('mongoose');

// Schema
const EventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	eventImg: {
		type: String
	},
	eventDate: {
		type: String,
		required: true
	}
});

// Model
const EventModel = mongoose.model('events', EventSchema); // => ('collection name', Schema Name)

module.exports = EventModel;

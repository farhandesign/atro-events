// Import Mongoose
const mongoose = require('mongoose');

// Schema
const EventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

// Model
const EventModel = mongoose.model('events', EventSchema); // => ('collection name', Schema Name)

module.exports = EventModel;

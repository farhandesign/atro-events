// Route for Events Page
const express = require('express');
const router = express.Router();

const EventModel = require('../models/EventModel');

// GET
router.get('/', (req, res) => {
	res.send('<h1>Create Events Page</h1>');
});

// POST
router.post('/', (req, res) => {
	const formData = {
		name: req.body.name,
		description: req.body.description,
		address: req.body.address,
		eventImg: req.body.eventImg,
		eventDate: req.body.eventDate
	};

	const newEventModel = new EventModel(formData);

	newEventModel
		.save()
		.then((dbDocument) => {
			res.send(dbDocument);
		})
		.catch((error) => {
			console.log(error);
		});
});

module.exports = router;

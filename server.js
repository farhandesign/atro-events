// Import Packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const createEventRouter = require('./routes/create-event');

// Create Server Obj
const server = express();

// Connect to DB using mongoose
const connectionString =
	'mongodb+srv://farhan_design:farhan_design@cluster0.mafhi.mongodb.net/astro_events?retryWrites=true&w=majority';
const connectionConfig = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};
mongoose
	.connect(connectionString, connectionConfig)
	.then(() => {
		console.log('DB is connected');
	})
	.catch(() => {
		console.log('error occured', error);
	});

// Tell Express how to use body-parser
server.use(bodyParser.urlencoded({ extended: false }));
// Tell express to recognize JSON
server.use(bodyParser.json());

// Route
server.get('/', (req, res) => {
	res.send('<h1>Welcome To Events Website</h1>');
});

// Use Events Routes
server.use('/create-event', createEventRouter);

server.listen(3500, () => {
	console.log('Server running on port 3500');
});

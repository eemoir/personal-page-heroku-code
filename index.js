const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Message = require('./message.js')

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.post('/contact', (req,res) => {
	let data = req.body
	let message = new Message({
		name: data.name,
		phone: data.phone,
		email: data.email,
		message: data.message
	})
	message.save(error => {
		if (error) {
			console.log(error)
			res.json({"error": "message failed to save"})
		} else {
			res.json({"success": "true"})
		}
	})
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.post('/contact', (req,res) => {
	console.log(req.body.name)
	res.json({"success": "true"})
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
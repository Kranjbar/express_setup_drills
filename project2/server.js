var express = require('express');
var app = express();

app.use(express.static('public'));

var animals = ["bears", "goats", "lions"];

app.get('/', function (req, res) {
	res.send(animals.join(", "));
});

app.get('/tacos', function (req, res) {
	res.send('Hello tacos');
});

app.listen(3000, function() {
	console.log('App listening at http://localhost:3000');
});
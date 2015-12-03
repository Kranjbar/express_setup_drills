var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('This is the root URL');
});

app.get('/food', function(req, res) {
	res.send('Hi!');
});

app.listen(3000, function() {
	console.log('App listening at http://localhost:3000');
});
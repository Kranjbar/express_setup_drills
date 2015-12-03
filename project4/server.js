var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/sealions/:id', function(req, res) {
	res.send("My favorite lion is " + req.params.id);
});

app.get('/eat', function(req, res) {
	var name = req.query.name;
	res.send('Eat ' + name);
});

app.listen(3000, function() {
	console.log('App listening at http://localhost:3000');
});
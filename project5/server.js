var express = require('express');
var app = express();

app.use(express.static('public'));

var monkeys = [
	{name: "John"},
	{name: "Jeff"}
];

app.get('/', function(req, res) {
	res.sendFile(index.html);
});

app.get('/json', function(req, res) {
	res.json(monkeys);
});

app.listen(3000, function() {
	console.log('App listening at http://localhost:3000');
});
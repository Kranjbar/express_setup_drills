var express = require('express');
var app = express();

app.use(function(req, res, next){
	res.header("Access-Control-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/more', function (req, res) {
	res.send('This is more');
});

app.listen(3000, function() {
	console.log("App listening at http://localhost:3000/");
});
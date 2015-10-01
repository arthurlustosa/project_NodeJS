var express = require('express');
var app = express();



app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.json(blocks);
});

var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));


app.listen(3000, function() {
	console.log('Listening on 3000 \n');
});
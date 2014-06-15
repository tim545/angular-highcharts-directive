/* --------------------------------------------------------
 *
 * Node.js Server
 *
 * ------------------------------------------------------ */

var express 	= require('express');
var http 		= require('http');
var path 		= require('path');
var app 		= express();

app.set('port', process.env.PORT || 3003);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(app.router);

var sampePath = path.join(__dirname, 'sample');
console.log(sampePath);

app.use(express.static(__dirname + '/sample'));
app.use('/sample', express.static(__dirname + '/sample'));
app.use('/src', express.static(__dirname + '/src'));

var server = app.listen(app.get('port'), function() {
	console.log('Server running and listening on port %d', app.get('port'));
});
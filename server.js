var express = require('express');
var app = express();
var getData = require('./code.js');

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/getdata', function (req, res) {
	
	function callback(rows){
		res.render('data', { title: 'Medical Data', rows : rows })
	}

	getData(callback);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

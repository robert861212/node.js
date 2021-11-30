var express = require('express');
var fs = require('fs')
var bodyParser = require('body-parser');
var validator = require('validator');
var url = require("url");
var app = express();

app.use(express.static(__dirname + '/public'));

var http = require("http");

app.use(express.static('public'))

app.get('/', function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    response.set('Content-Type', 'text/html');
    fs.readFile("index.html", 'utf8', function (err,data) {
    response.send(data);
    });
});


app.listen(process.env.PORT || 3000);
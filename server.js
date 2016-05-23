var express = require('express');
var bodyParser = require('body-parser');
// var moment = require('moment');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + '/client')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js');
routes(app);

app.listen(8000, function(){
	console.log("listening on port 8000...");
})
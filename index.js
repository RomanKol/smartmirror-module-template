'use strict';

var express = require('express');
var app = express();

var controller = require('./app/controller');

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  let hello = 'World';
  controller.get({hello: hello})
  .then((data) => {
    res.render('app/view.jade', data);
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
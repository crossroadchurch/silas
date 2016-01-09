var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();

app.get('/static/bundle.js', function(req, res) {
  console.log('Requested bundle')
  res.sendFile(path.join(__dirname, 'dist/bundle.js'))
});

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
});

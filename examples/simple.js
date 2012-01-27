var express = require('express');
require('../prettylogger');

var app = express.createServer();

app.use(express.logger('pretty'));

app.get('/', function (req, res) {
  res.send('Hello, world');
});

app.listen(8080);

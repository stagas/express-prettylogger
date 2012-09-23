var express = require('express')
var colors = require('colors')
var useragent = require('useragent')

express.logger.format('pretty', function(tokens, req, res){
  var app = req.app || res.app
    , status = res.statusCode
    , color = 'green';

  if (status >= 500) color = 'magenta'
  else if (status >= 400) color = 'red'
  else if (status >= 300) color = 'yellow';

  var agent = useragent.parse(req.headers['user-agent'])

  var now = new Date()
  return [ (app.settings.shortname || app.settings.name || 'express').cyan
    , ('[' + now.toUTCString().split(' ')[4] + ' ' + now.getUTCDate() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCFullYear().toString().substr(-2) + ']').white
    , (req.headers['ip'] || req.headers['x-ip'] || req.headers['x-real-ip']
      || req.connection.remoteAddress || '127.0.0.1').magenta
    , (req.method
      + ' ' + status
      )[color]
    , (req.url || '-').cyan
    , (req.headers.referer || '-').green
    , agent.toString().grey
    ].join(' ')
});

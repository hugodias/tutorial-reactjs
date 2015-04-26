
/**
 * Module dependencies.
 */

var express = require('express'),
  socket = require('./routes/socket.js');

var app = module.exports = express.createServer();

var io = require('socket.io').listen(app);

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Sockets
io.sockets.on('connection', socket);

app.listen((process.env.PORT || 5000), function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

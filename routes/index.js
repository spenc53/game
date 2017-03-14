var express = require('express');
var router = express.Router();
var http = require('http').Server(express);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

router.get('/', function(req, res){
  res.sendFile('/index.html', { root: 'public' });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


module.exports = router;

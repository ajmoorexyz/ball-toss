// BASE SETUP
// =============================================================================

var express  = require('express')
var app      = express()
var http     = require('http').createServer(app)
var io       = require('socket.io')(http)

// static assets
app.use(express.static(__dirname + '/public'))

// socket emitters
io.on('connection', function(socket) {

  console.log('a user connected')

  socket.on('disconnect', function() {
    console.log('user disconnected')
  })

  socket.on('toss', function(msg) {
    console.log(`message: ${msg.player}`)
    socket.broadcast.emit('catch')
  })

})

// START THE SERVER
// =============================================================================

// set our port
var port = process.env.PORT || 1234

http.listen(port, function() {
  console.log('Magic happens on port: ' + port)
})

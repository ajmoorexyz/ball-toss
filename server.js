// BASE SETUP
// =============================================================================

let express  = require('express')
let app      = express()
let http     = require('http').createServer(app)
let io       = require('socket.io')(http)

// static assets
app.use(express.static(__dirname + '/public'))

// socket emitters
io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('toss', (msg) => {
    console.log(`message: ${msg.player}`)

    socket.broadcast.emit('catch')
  })

})

// START THE SERVER
// =============================================================================

// set our port
let port = process.env.PORT || 1234

http.listen(port, () => {
  console.log(`Magic happens on port: ${port}`)
})

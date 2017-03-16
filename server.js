// BASE SETUP
// =============================================================================

const express  = require('express')
const app      = express()
const http     = require('http').createServer(app)
const io       = require('socket.io')(http)

// static assets
app.use(express.static(__dirname + '/public'))

// socket emitters
io.on('connection', (socket) => {

  // let's make sure that we only create 2 users... for now
  if(users.length < 2) {
    users.push(new User(users.length + 1))
  }
  // TODO: what if an additional user connects
  socket.broadcast.emit('message', {
    users: users
  })

  console.log('users: ', users)

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
const port = process.env.PORT || 1234

http.listen(port, () => {
  console.log(`Magic happens on port: ${port}`)
})

// USER CREATION
class User {
  constructor(userNo) {
    this.userID = userNo
  }
}

// while users.length < 2 new users can be created
// max of 2 users

// USERS
const users = []

var socket = io()

$('form').submit(function() {
  socket.emit('toss', $('#m').val())
  $('#m').val('')
  return false
})

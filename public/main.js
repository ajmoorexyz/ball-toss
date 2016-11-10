var socket = io()

let reset = false
// 'toss' is emitted when the submit
// btn is clicked (tossed)
$('form').submit(function() {
  socket.emit('toss', { player: new Date() })
  socket.on('catch', () => { toggle() })
  return false
})

// this toggle is meant to abstract
// the business logic from the view
function toggle() {
  if (reset) {
    return $('.ball').css( "background-color", "red") && reset != reset
  }
  return $('.ball').css( "background-color", "gold") && reset != reset
}

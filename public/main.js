var socket = io()

// 'toss' is emitted when the submit
// btn is clicked (tossed)
$('form').submit(function() {
  socket.emit('toss', $('.ball').val())
  toggle($('.ball').val())
  return false
})

// this toggle is meant to abstract
// the business logic from the view
function toggle(a) {
  a === 'Catch' ? $('.ball').val('Toss') : $('.ball').val('Catch')
}

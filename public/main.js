// Let's create our socket
let socket = io()

// let's create a mechanism to manage state
let reset = false

// 'toss' ~ click-handler
$('form').submit(function() {

  // it's important to keep users unique
  socket.emit( 'toss', { player: new Date() } )

  // toss --> SERVER --> catch
  socket.on( 'catch', () => { toggle(reset) } )

  return false
})


// business logic from the view
function toggle() {

  if (reset) {
    $('.ball').css( "background-color", "red")

    reset = !reset
    return
  }

    $('.ball').css( "background-color", "gold")
    reset = !reset
    return


}

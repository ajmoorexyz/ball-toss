// Let's create our socket
let socket = io()

// let's create a mechanism to manage state
let reset = false

// 'toss' ~ click-handler
$('form').submit(function() {

  // it's important to keep users unique
  socket.emit( 'toss', {
    // this is where player gets set
    // it's always different b/c new date is getting called
    player: new Date()
  } )

  // toss --> SERVER --> catch
  socket.on( 'catch', () => {
    toggle()
  } )

  return false
})

socket.on('message', (data) => {
  console.log(`users: ${data.users[0].userID}`)
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

// not yet implemented
// function disappear() {
//   $('.ball').css( "display", "none")
// }

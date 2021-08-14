import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {

  // send to the client side via socket
  socket.emit('news', { hello: 'adonis' })

  // listen to the client side socket event
  socket.on('an_event', (data) => {
    // console.log(data)
  })
  
})

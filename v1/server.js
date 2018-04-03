#!/home/alumne/node-v6.11.4-linux-x64/bin/node

// NODE.js no soporta de serie import/export ES modules
const net = require('net')

// TCP
let server = net.createServer(onClientConnnected)

// per sota de 1024 heu de ser root
const PORT='5000'
const ADDRESS='192.168.204.111'

// server.listen(PORT,'0.0.0.0')
server.listen(PORT)
// server.listen(PORT,ADDRESS)

function onClientConnnected(socket) {
  // Literal strings es6
  console.log(`New client connected ${socket.remoteAddress}:${socket.remotePort}`)
  // socket.destroy()

  socket.on('data', function (data) {
    console.log(data)
    socket.write(data)
  })
}

console.log(`Server started at port ${PORT}`)
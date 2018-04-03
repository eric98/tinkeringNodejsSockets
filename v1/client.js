#!/home/alumne/node-v6.11.4-linux-x64/bin/node

const net = require('net')

let client = new net.Socket()

client.connect(5000,'127.0.0.1',function () {
  console.log('Connected')
  client.write('Hello!')
})

client.on('close', function () {
  console.log('Connection closed')
})

client.on('data', function (data) {
  console.log(data)
  // client.write(data)
})
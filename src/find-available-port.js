const http = require('node:http')
const net = require('node:net')

const desiredPort = process.env.PORT ?? 3000

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then((port) => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

const server = http.createServer((req, res) => {
  console.log('request received', req.url)
  res.end('Hola mundo!!!')
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`)
  })
})

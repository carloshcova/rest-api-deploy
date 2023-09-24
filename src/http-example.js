const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statuscode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/pepe.png') {
    fs.readFile('./pepe.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('content-type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/about') {
    res.statuscode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>About.</h1>')
  } else {
    res.statuscode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Esta página no existe</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${desiredPort}`)
})

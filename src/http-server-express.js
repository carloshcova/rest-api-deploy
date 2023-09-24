const express = require('express')
const dittoJSON = require('./src/pokemon.json')
const app = express()

app.disable('x-powered-by')

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('<h1>Bienvenido a mi página de inicio</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.send(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>Esta página no existe</h1>')
})

app.listen(1234, () => {
  console.log('Server is running on port 1234')
})

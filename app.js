import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()

app.disable('x-powered-by')

app.use(json())

app.use(corsMiddleware()) // res.header('Access-Control-Allow-Origin', '*')

app.get('/', (req, res) => { res.json({ message: 'Hello World' }) })

app.use('/movies', moviesRouter)

const port = process.env.PORT ?? 1234

app.listen(port, () => console.log(`Server running on port http:///localhost:${port}`))

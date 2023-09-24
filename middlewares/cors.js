import cors from 'cors'

const ACCPETED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:3000',
  'http://movies.con',
  'http://ccova.tech'
]

export const corsMiddleware = ({ acceptedOrigins = ACCPETED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})

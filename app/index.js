const express = require('express')
const app = express()
const cors = require('cors')

const infracoes = require('./api/infracoes')
const cacheMiddleware = require('./middlewares/cache_middleware')

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'

app.use(cors())
app.use(express.json({ extended: false }))

// Routers
app.use('/api/infracoes', cacheMiddleware, infracoes)

app.listen(PORT, HOST, () => {
  console.log(`App listening ON ${HOST}:${PORT}`)
})
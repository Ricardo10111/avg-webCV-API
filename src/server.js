const cors = require('cors')
const express = require('express')

const infoRouter = require('./router/info.router')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/info', infoRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'API AVGWEBCV V1'
  })
})

module.exports = app

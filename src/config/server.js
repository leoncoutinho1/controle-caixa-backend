require('dotenv/config')
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')

const port = process.env.PORT || 3003;

server.use(cors)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => {})

module.exports = server
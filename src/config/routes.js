const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const inputService = require('../api/input/inputService')
    inputService.register(router, '/inputs')

    const flowService = require('../api/flow/flowService')
    flowService.register(router, '/flows')
}
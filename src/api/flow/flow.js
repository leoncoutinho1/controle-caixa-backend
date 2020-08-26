const restful = require('node-restful')
const moment = require('moment')

const mongoose = restful.mongoose

const flowSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

module.exports = restful.model('flow', flowSchema)
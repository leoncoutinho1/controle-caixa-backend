const restful = require('node-restful')

const mongoose = restful.mongoose

const inputSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    cashflow: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

module.exports = restful.model('input', inputSchema)
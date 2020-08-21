const restful = require('node-restful')
const moment = require('moment')

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
        type: String,
        default: moment.utc().local().format('YYYY-MM-DD hh:mm:ss')
    }
})

module.exports = restful.model('input', inputSchema)
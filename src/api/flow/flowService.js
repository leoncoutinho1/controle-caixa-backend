const Flow = require('./flow')

Flow.methods(['get', 'post', 'put', 'delete'])
Flow.updateOptions({ new: true, runValidators: true })

module.exports = Flow
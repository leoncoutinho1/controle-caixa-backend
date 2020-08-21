const Input = require('./input')

Input.methods(['get', 'post', 'put', 'delete'])
Input.updateOptions({ new: true, runValidators: true })

module.exports = Input
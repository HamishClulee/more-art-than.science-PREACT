let mongoose = require('mongoose')

let magnetSchema = mongoose.Schema({
    hash: String,
    message: [String]
})

module.exports = mongoose.model('Magnet', magnetSchema)

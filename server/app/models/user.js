let mongoose = require('mongoose')
let bcrypt = require('bcrypt-nodejs')
let userSchema = mongoose.Schema({
    email: { type: String, default: '' },
    password: String,
    name: { type: String, default: '' },
    phone: { type: String, default: '' },
    address: { type: String, default: '' },
    role: { type: String, default: 'user' }
})

// methods ====================================================================
userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
userSchema.methods.validPassword = (password, hashed) => {
    return bcrypt.compareSync(password, hashed)
}

module.exports = mongoose.model('User', userSchema)

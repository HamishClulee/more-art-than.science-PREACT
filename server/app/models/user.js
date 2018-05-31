let mongoose = require('mongoose')
let bcrypt = require('bcrypt-nodejs')

// define the schema for our user model
let userSchema = mongoose.Schema({
    email: { type: String, default: '' },
    password: String,
    facebook: {
        id: String,
        token: String,
        name: { type: String, default: '' },
        email: { type: String, default: '' }
    },
    google: {
        id: String,
        token: String,
        email: { type: String, default: '' },
        name: { type: String, default: '' }
    },
    name: { type: String, default: '' },
    phone: { type: String, default: '' },
    address: { type: String, default: '' },
    role: { type: String, default: 'user' }
})

// methods ====================================================================
// generating a hash
userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// checking if password is valid
userSchema.methods.validPassword = (password, hashed) => {
    return bcrypt.compareSync(password, hashed)
}

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema)

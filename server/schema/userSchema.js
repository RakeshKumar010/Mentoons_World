const mongoose = require('mongoose')
const userModel = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: Number,
    cpassword: Number,
})

module.exports = mongoose.model('users', userModel)
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
     name: {
        type: String
     },
     email: {
        type: String
     },
     password: {
        type: String
     },
     token: {
        type: String,
        default: ''
     }

})

const user = mongoose.model('user', userSchema);
module.exports = user

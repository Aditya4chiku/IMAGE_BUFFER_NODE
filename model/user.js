const mongoose = require('mongoose')
const User = new mongoose.Schema({
    name: {
        type: String
    },
    avatar: {
        type: Buffer
    }
})
module.exports = mongoose.model('user', User)

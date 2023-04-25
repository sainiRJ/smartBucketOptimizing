const mongoose = require('mongoose')
const SessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId
    },
    sessionStatus: {
        type: Number,
        default: 0
    },
    bucketName: {
        type: String,
        default: ''
    },
    bucketSize: {
        type: Number,
        float: true
    },
    totalNumberBalls: {
        type: Number,
        default: 0
    }
})

const session = mongoose.model('session', SessionSchema);

module.exports = session
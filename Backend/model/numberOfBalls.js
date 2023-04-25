const mongoose = require('mongoose')
const numberOfBallsSchema = new mongoose.Schema({
    pink: {
        type: Number
    },
    red: {
        type: Number
    },
    blue: {
        type: Number
    },
    orange: {
        type: Number
    },
    green: {
        type: Number
    },
    userId: {
        type: mongoose.Types.ObjectId
    }
})

const numberOfBalls = mongoose.model('numberOfBalls', numberOfBallsSchema);

module.exports = numberOfBalls
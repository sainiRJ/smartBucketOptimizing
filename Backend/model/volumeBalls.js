const mongoose = require('mongoose')
const volumeBallsSchema = new mongoose.Schema({ 
    pink: {
        type: Number, 
        float: true
    },
    red: {
        type: Number, 
        float: true
    },
    blue: {
        type: Number, 
        float: true
    },
    orange: {
        type: Number, 
        float: true
    },
    green: {
        type: Number, 
        float: true
    },
    userId: {
        type: mongoose.Types.ObjectId
    }
 });

 const volumeBalls = mongoose.model('volumeBalls', volumeBallsSchema);

 module.exports = volumeBalls
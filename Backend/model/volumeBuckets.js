const mongoose = require('mongoose')
const volumeBucketSchema = new mongoose.Schema({ 
    bucketA: {
        type: Number, 
        float: true
    },
    bucketB: {
        type: Number, 
        float: true
    },
    bucketC: {
        type: Number, 
        float: true
    },
    bucketD: {
        type: Number, 
        float: true
    },
    bucketE: {
        type: Number, 
        float: true
    },
    userId: {
        type: mongoose.Types.ObjectId
    }
 });

 const volumeBucket = mongoose.model('volumeBucket', volumeBucketSchema);
 module.exports = volumeBucket
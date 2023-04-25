const numberOfBalls = require('../model/numberOfBalls')
const bucketVolume = require('../model/volumeBuckets')
const volumeBalls = require('../model/volumeBalls')
const mongoose = require('mongoose')
exports.createNumberOfBalls = async function (data){
    const filter = {userId: data.userId}
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    return await numberOfBalls.findOneAndUpdate(filter,data,options)
}

exports.getVolumeBucket = async function(userId){
    return await bucketVolume.findOne({userId: userId},{_id: 0,__v: 0}).sort({ bucketA: 1, bucketB: 1, bucketC: 1, bucketD: 1, bucketE: 1 })
}

exports.getVolumeBalls = async function(userId){
    return await volumeBalls.findOne({userId: userId},{_id: 0,__v: 0})
}

exports.convertVolumeBucketPlainObj = async function(data){
    const mongooseDoc = new bucketVolume(data);
    const plainObj = mongooseDoc.toObject();
    delete plainObj._id
    return plainObj
}

exports.convertVolumeOfBallsPlainObj = async function(data){
    const mongooseDoc = new volumeBalls(data);
    const plainObj = mongooseDoc.toObject();
    delete plainObj._id
    return plainObj
}




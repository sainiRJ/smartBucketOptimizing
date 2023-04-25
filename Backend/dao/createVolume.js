const volumeBalls = require('../model/volumeBalls')
const volumeBuckets = require('../model/volumeBuckets')

exports.createVolumeBall = async function(data){
    const filter = {userId: data.userId}
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    return await volumeBalls.findOneAndUpdate(filter,data,options)
}

exports.createVolumeBucket = async function(data){
    const filter = {userId: data.userId}
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    return await volumeBuckets.findOneAndUpdate(filter,data,options)
}
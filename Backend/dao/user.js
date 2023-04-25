const user = require('../model/user')
const session = require('../model/session')
exports.createUser = async function(data){
    return await user.create(data)
}
exports.getUserDetails = async function(email){
    return await user.findOne({email: email})
}
exports.updateUser = async function(id,data){
    return user.findByIdAndUpdate({_id: id},data,{ new: true })
}
exports.createUserSession = async function(data){
    const filter = {userId: data.userId}
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    return await session.findOneAndUpdate(filter,data,options)
}
exports.getUserSession = async function(userId,status){
    return session.findOne({userId: userId,sessionStatus: status })
}

exports.getToken = async function(token){
    return await user.findOne({token: token})
}


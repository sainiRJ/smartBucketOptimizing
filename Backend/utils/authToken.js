const jwt = require('jsonwebtoken')
const getUserDetail = require('../dao/user')
exports.validation = async function(req,res,next){
   try {
    const getUserDetails = await getUserDetail.getToken(req.headers.token)
    const decoded = jwt.verify(getUserDetails.token, 'secret')
    if(decoded){
        req.user =decoded
        next()
    }
   } catch (error) {
    return res.status(200).json({status: false,message: 'Token expired'})
   }
   
}

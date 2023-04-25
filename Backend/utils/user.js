const bcrypt =  require('bcrypt')
exports.genratehashPassword = async function(password){
    const genSalt = await bcrypt.genSalt(10)
    return bcrypt.hash(password,genSalt)
}

exports.comparePasswordHash = async function(password,hashPassword){
    return bcrypt.compare(password,hashPassword)
}

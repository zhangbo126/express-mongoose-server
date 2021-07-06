const crypto = require("crypto")


const md5Encry =(password)=>{
    let md5  = crypto.createHash('md5')
    md5.update(password)
    return md5.digest('hex')
}

module.exports = md5Encry
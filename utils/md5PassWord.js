const crypto = require("crypto")

/** 
 * md5加密
 *
 * @param {String} password 密码
 * @return  加密结果
 */
const md5Encry =(password)=>{
    let md5  = crypto.createHash('md5')
    md5.update(password)
    return md5.digest('hex')
}

module.exports = md5Encry
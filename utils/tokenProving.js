
let jwt = require('jsonwebtoken');
/** 
 * token 有效验证
 *
 * @param {String} token token
 * @return false | true
 */

const tokenRange = (token) => {
    let secretOrPrivateKey = "mes_qdhd_mobile_xhykjyxgs";
    return jwt.verify(token, secretOrPrivateKey, (err, data) => {
        if (err) {
            return false
        }
        return true
    })
}

const tokenSet = () => {
    //生成Token
    const name = eval("_rsl=" + '"\\u' + Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16) + '"')
    const id = Number(Math.random().toString().substr(3, 12) + Date.now()).toString(36)
    const signkey = 'mes_qdhd_mobile_xhykjyxgs'
    return token = jwt.sign({
        name,
        id
    }, signkey, { expiresIn: 60 * 60 * 100 });
}




module.exports = {
    tokenRange,
    tokenSet
}

/** 
 * 请求参数长度验证
 *
 * @param {Object} obj 验证的内容
 * @param {Number} len 验证的内容
 * @return  验证值长度
 */

const reqMultipleRule = (obj, len) => {
    let valueList = Object.values(obj)
    return valueList.some(v => {
        if (v == null || v == undefined || v == '' ) {
            v = '0'
        }
        return v.length > len
    })
}

/** 
 * 请求参数长度验证
 *
 * @param {Object} obj 验证的内容
 * @return  验证值结果
 */
const reqSubmitRule = (obj) => {
    let valueList = Object.values(obj)
    return valueList.some(v => {
        return v == null || v == undefined ||  v.length==0
    })
}

module.exports = {
    reqMultipleRule,
    reqSubmitRule
}



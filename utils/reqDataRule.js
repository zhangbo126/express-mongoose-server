/*
请求参数长度验证
  obj 验证的内容
  let 限定的长度
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


/*
必传参数验证
obj  验证参数
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



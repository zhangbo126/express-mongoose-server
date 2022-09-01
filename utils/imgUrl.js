let getIpUrl = require('./getIpAddress')

/** 
 * 处理上传图片url路径
 *
 * @param {String} url 图片路径
 * @return imgPath
 */
const replaceImgUrl = (url) => {
    if(!url || url.length==0){
        return url
    }
    let http = `http://localhost:99`
    let index = url.lastIndexOf("/upload/")
    imgPath = http + url.substring(index, url.length)   
    return imgPath
}

module.exports = replaceImgUrl
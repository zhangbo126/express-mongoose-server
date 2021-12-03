let getIpUrl = require('./getIpAddress')

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
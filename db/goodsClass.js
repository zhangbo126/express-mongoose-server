const mongoose = require('./connect')
let schema = mongoose.Schema({
    "name": String,
    "logoFilePath": String,
    "status": Number,
    "partentId": String,
    "partentName":String,
    "sort":Number,   
})

//goodsInfoClass 集合名称
let goodsClassInfo = mongoose.model('goodsClass', schema, 'goodsClassList')
module.exports = goodsClassInfo

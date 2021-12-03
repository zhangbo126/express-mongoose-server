const mongoose = require('./connect')
let schema = mongoose.Schema({
    "goodsName": String,
    "brandId": String,
    "brandName": String,
    "categoryId": String,
    "categoryName": String,
    "placeOrigin":String,
    "status": Number,    // 1待完善 2 在售   3下架  
    "goodsId": String,
    "goodsDetail": String,
    "goodsNo":String,
    "spaceValueList":Array,//规格列
})

//goodsInfoList 集合名称
let goodsInfo = mongoose.model('goodsSpace', schema, 'goodsSpaceList')

module.exports = goodsInfo

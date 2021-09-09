const mongoose = require('./connect')
let schema = mongoose.Schema({
    "goodsName": String,
    "brandId": String,
    "brandName": String,
    "categoryId": String,
    "categoryName": String,
    "status": Number,    // 1待完善 2 在售   3下架  
    "goodsId": String,
    "skuName": String, //sku名称
    "designSketch": Array, //商品效果图
    "price": Number, //商品价格
    "mixLength": Number,
    "mixWidth": Number,
    "mixHeight": Number,
    "goodsDetail": String,
    "goodsNo": String,
    "specValue1": String,
    "specValue2": String,
    "specValue3": String,
    "specValue4": String,
})

//goodsInfoList 集合名称
let goodsInfo = mongoose.model('goodsInfo', schema, 'goodsInfoList')

module.exports = goodsInfo

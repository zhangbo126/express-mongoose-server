const mongoose = require('./connect')
let schema = mongoose.Schema({
    "userId": {
        type: String,
        unique: false,
    }, //用户ID
    "skuId": {
        type: String,
        unique: false,
    }, //商品ID
    "goodsName": String,
    "brandId": String,
    "brandName": String,
    "categoryId": String,
    "categoryName": String,
    "placeOrigin": String,
    "status": Number,    // 1待完善 2 在售   3下架  
    "skuName": String, //sku名称
    "designSketch": Array, //商品效果图
    "price": Number, //商品价格
    "weight": Number, //商品重量
    "goodsDetail": String,
    "goodsNo": String,
    "specValue1": String,
    "specValue2": String,
    "specValue3": String,
    "specValue4": String,
    'mixDetail': String,
    "goodsType": Number, //商品类型  1普通 2 秒杀 3 团购
    "salesVolume": Number,
    "num": Number,


})

//goodsInfoClass 集合名称
let cartInfo = mongoose.model('cartInfo', schema, 'cartList')
module.exports = cartInfo

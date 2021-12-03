const mongoose = require('./connect')
let schema = mongoose.Schema({
    "name": String,
    "status": Number,
    "content": String,
    "imageFilePath": String,
    "createTime":String,

})



//informationList 集合名称
let information = mongoose.model('informationInfo', schema, 'informationList')
module.exports = information
const mongoose = require('./connect')
let schema = mongoose.Schema({
    "name": String,
    "logoFilePath": String,
    "status": Number,
    "introduce": String,
    "sort": Number,
})

//brandInfoList 集合名称
let goodsBrandInfo = mongoose.model('goodsBrnad', schema, 'goodsBrnadList')
module.exports = goodsBrandInfo

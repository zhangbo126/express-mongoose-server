const mongoose = require('./connect')
let schema = mongoose.Schema({
    "name": String,
    "describe": String,
    "status": Number,
    "roleMenuList": Array,
    

})

//roleInfoList 集合名称
let roleInfo = mongoose.model('roleInfo', schema, 'roleInfoList')

module.exports = roleInfo

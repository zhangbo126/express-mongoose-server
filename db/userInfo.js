const mongoose = require('./connect')
let schema = mongoose.Schema({
    "userName": String,
    "userAccount": String,
    "passWord": String,
    "confirmPassWord": String,
    "token": String,
    "createTime": String,
    "loginTime": String,
    "loginIp": String,
    "userInfo": Object,
    "userRole": Array,
    "phone": String ,
    "email":String,
    "status":Number,

})



//userInfoList 集合名称
let userInfo = mongoose.model('userInfo', schema, 'userInfoList')


module.exports = userInfo



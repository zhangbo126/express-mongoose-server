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
    "userRoleName": Array,
    "phone": String ,
    "email":String,
    "status":Number,
    "userType":Number,  //用户类型 1 管理端  2 小程序
    "openId":String, //小程序登录openId
    "sessionKey":String,
    "avatarUrl":String, //用户头像
})



//userInfoList 集合名称
let userInfo = mongoose.model('userInfo', schema, 'userInfoList')


module.exports = userInfo



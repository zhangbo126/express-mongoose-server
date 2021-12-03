//获取本机IP

let getIpUrl= require('../utils/getIpAddress')
let express = require('express');
let app = express();
// 1. 请求模块
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false)
// Backstage 为 数据库名
let DB_URL = 'mongodb://127.0.0.1:27017/ZB_DATA';
// 2. 连接数据库
mongoose.connect(DB_URL, {
	// mongodb 更新，需要补充的内容
	useNewUrlParser: true, // 使用 新的 url解析方式
	useUnifiedTopology: true, // 使用 拓扑 结构 去存储集合
	useCreateIndex:true,
});



// 3. 监听事件
// connected 已 连接
mongoose.connection.on('connected', function () {
	console.log(`连接成功请求端口:http://${getIpUrl()}:99`);
});



// disconnected 已 断开连接
mongoose.connection.on('disconnected', function () {
	console.log('断开连接');
});

// error 连接错误
mongoose.connection.on('error', function (err) {
	console.log('连接错误', err);
});





module.exports = mongoose;

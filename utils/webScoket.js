

/** 
 * WebScoket  初始化连接
*/

let express = require('express');
let app = express();
let http = require('http');
const webScoket = require('ws')
const server = http.createServer(app);
const wss = new webScoket.Server({ server })
const wssAddEvelistenr = () => {
	wss.on('connection', function connection(ws) {
		console.log('开始连接！');
		ws.on('message', function incoming(data) {
			console.log('接收到了消息！', data);
			if (data.length > 6) {
				setTimeout(function () {
					ws.send(data + '接收到了数据')
				}, 1220);
			}

			/**
			 * 把消息发送到所有的客户端
			 * wss.clients获取所有链接的客户端
			 */
			// wss.clients.forEach(function each(client) {
			//     client.send(data);
			// });
		});
	});



}
module.exports = wssAddEvelistenr
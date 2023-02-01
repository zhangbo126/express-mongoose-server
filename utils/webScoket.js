/** 
 * WebScoket  初始化连接
 * @function scoketAddEvelistenr  scoket 监听连接初始化方法
 * @function WebScoket  scoket类封装 
 * @function onClone  客户端连接断开 
**/
/**
 * @function createServer  scoket实列创建
 * @param  {Object} options 
**/
/**
 * @function onMessage  scoket 客户端消息接收 
 * @param  {String} messaege 接收到的消息
 */
/**
  * @function onSend  scoket  向客户端发送消息 
  * @param  {String} messaege  发送给客户端的消息
*/
const webScoket = require('ws')

class WebScoket {
	constructor() {
		// 当前scoket对象
		this.scoket = {}
		// 当前scoket连接信息
		this.ws = {}
	}
	createServer(options) {
		this.scoket = new webScoket.Server(options);
		this.scoket.on('connection', (ws, req) => this.onConnection(ws, req))
	}
	onConnection(ws, req) {
		console.log('建立连接', req.url);
		this.ws = ws
		ws.send(JSON.stringify({ data: '建立连接' }));
		ws.on('message', (msg) => this.onMessage(msg));
		ws.on('close', (msg) => this.onClone(msg));
	}

	onMessage(message) {
		this.scoket.clients.forEach((client) => {
			if (client.readyState === webScoket.OPEN) {
				this.ws.send(" -> " + message)
			}
		})
	}
	onClone(message) {
		console.log('关闭连接');
	}
   
	onSend(messaege) {
       console.log(this.ws)
		this.ws.send(messaege)
		
	}
}
let ws = new WebScoket()  //声明一个新实列

const scoketAddEvelistenr = () => {
	ws.createServer({ port: 8080 })
}

module.exports = {
	scoketAddEvelistenr,
	onSend: ws.onSend,
	onMessage: ws.onMessage,
	onClone: ws.onSend,
}
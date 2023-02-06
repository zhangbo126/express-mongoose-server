/** 
 * WebScoket  初始化连接
 * @function onClone  客户端连接断开 
**/
/**
 * @function createServer  scoket实列创建
 * @param  {Object} options 
**/
/**
 * @function onMessage  scoket 客户端消息接收 
 * @param  {String} message 接收到的消息
 */
/**
  * @function onSend  scoket  向客户端发送消息 
  * @param  {String} message  发送给客户端的消息
*/
const Scoket = require('ws')
// 当前scoket对象
let scoket = {}
//当前scoket连接信息
let ws = {}

const createServer = () => {
	scoket = new Scoket.Server({ port: 8080 });
	scoket.on('connection', (ws, req) => onConnection(ws, req))
}

const onConnection = (wss, req) => {
	console.log('建立连接', req.url);
	ws = wss
	ws.send(JSON.stringify({ data: '建立连接'}));
	ws.on('message', (message) => {
		scoket.clients.forEach((client) => {
			if (client.readyState === Scoket.OPEN) {
				console.log('收到消息', message)
				ws.send(" -> " + message)
			}
		})
	});
	ws.on('close', (msg) => onClone(msg));
	ws.on('error', (err) => onError(err))
}

const onMessage = (callback) => {
	console.log(callback)
	ws.on('message', (message) => {
		scoket.clients.forEach((client) => {
			if (client.readyState === Scoket.OPEN) {
				console.log('收到消息callback', message)
				callback(message)
			}
		})
	});
}

const onClone = () => {

}

const onError = (callback) => {
	ws.on('error', (err) => {
		callback(err)
	})
}

const onSend = (message) => {
	ws.send(message)
}

module.exports = {
	createServer,
	onSend,
	onMessage,
	onClone,
	onError
}
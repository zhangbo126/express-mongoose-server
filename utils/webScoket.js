const Scoket = require('ws')
// 当前scoket对象
let scoket = {}
//当前scoket连接信息
let ws = {}


/**
 * @function createServer  scoket实列创建
 * @param  {Object} options 
**/
const createServer = () => {
	scoket = new Scoket.Server({ port: 8080 });
	scoket.on('connection', (ws, req) => onConnection(ws, req))
}


//与服务端建立连接
const onConnection = (wss, req) => {
	console.log('建立连接', req.url);
	ws = wss
	ws.send(JSON.stringify({ data: '建立连接' }));
	ws.on('message', (message) => {
		scoket.clients.forEach((client) => {
			if (client.readyState === Scoket.OPEN) {
				// 将收到的消息转化为二进制代码
				const msg = message.toString()
				console.log('收到消息', msg)
				ws.send(msg)
			}
		})
	});
	ws.on('close', (msg) => onClone(msg));
	ws.on('error', (err) => onError(err))
}



/**
 * @function onMessage  scoket 客户端消息接收 
 * @param  {String} message 接收到的消息
 */
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


/** 
 * WebScoket  初始化连接
 * @function onClone  客户端连接断开 
**/
const onClone = () => {
   
}

/**
* @function onError  scoket错误处理 
* @param  {String} callback  错误回调
*/
const onError = (callback) => {
	ws.on('error', (err) => {
		callback(err)
	})
}


/**
  * @function onSend  scoket  向客户端发送消息 
  * @param  {String} message  发送给客户端的消息
*/
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
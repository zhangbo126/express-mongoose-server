
let webScoket = require('./webScoket') //webscoket连接方法
let routesApiInit = require('./routesApiInit') //接口api初始化方法
let apiToken = require('./tokenProving')  //token验证方法
module.exports = {
	webScoket,
	routesApiInit,
	tokenRange: apiToken.tokenRange
}



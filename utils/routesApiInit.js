
/** 
 * API 接口初始化
*/

let rouerModle = require('../routes/index')
const routesApiInit = (app) => {
	app.use('/users', rouerModle.users); //用户中心
	app.use('/menu', rouerModle.menu);  //菜单中心
	app.use('/role', rouerModle.role);  //权限管理
	app.use('/goods', rouerModle.goods);  //商品
	app.use('/class', rouerModle.goodsClass);  //商品分类
	app.use('/upload', rouerModle.upload);   //文件上传
	app.use('/brand', rouerModle.goodsBrand);  //商品品牌
	app.use('/information', rouerModle.information);  //活动中心
	app.use('/cart', rouerModle.cart);  //购物车 
	app.use('/order', rouerModle.order); //订单
}

module.exports = routesApiInit
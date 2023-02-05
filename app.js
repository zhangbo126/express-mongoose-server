var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
var expressJwt = require('express-jwt')
let db = require('./db').userInfo
let app = express();
let utils = require('./utils/init')  //初始化方法
// app.use(expressJwt({
//   secret: 'mes_qdhd_mobile_xhykjyxgs',
//   algorithms: ['HS256']
// }).unless({
//   path: ['/users/login', '/']
// }))


// error  handler   //token验证 全局拦截
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Request-Headers', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


app.use(function (err, req, res, next) {

  let token = req.headers.authorization
  let isAuth = utils.tokenRange(token)
  if (token && isAuth) {
    //全局验证 当前 token 是否有效
    db.findOne({ token }).then(data => {
      if (!data) {
        res.status(403).jsonp({ message: '登录失效', code: 403 })
        res.render('error')
      } else {
        next()
      }
    })

  } else {
    res.status(err.status)
    res.render('error')
  }
});



app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '.')));

//路由API 初始化注册方法
utils.routesApiInit(app) 
//创建scoket连接 初始化
utils.webScoket.createServer()



//统一处理接口错误问题
app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).jsonp({ message: err.message, code: 500 })
  }
  next()
})


module.exports = app;

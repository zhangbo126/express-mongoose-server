var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
var expressJwt = require('express-jwt')
let Token = require('./utils/tokenProving')
let db = require('./db').userInfo
let rouerModle = require('./routes')

var app = express();

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
 
  if (err) {
    return res.json({
      code: 0,
      message: '异常'
    })
  }
  let token = req.headers.authorization
  let isAuth = Token.tokenRange(token)
  if (token && isAuth) {
    //全局验证 当前 token 是否有效
    db.findOne({ token }).then(data => {
      if (!data) {
        res.status(403)
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
app.use('/users', rouerModle.users);
app.use('/menu', rouerModle.menu);
app.use('/role', rouerModle.role);
app.use('/goods', rouerModle.goods);
app.use('/class', rouerModle.goodsClass);
app.use('/upload', rouerModle.upload);
app.use('/brand', rouerModle.goodsBrand);
app.use('/information', rouerModle.information);
app.use('/cart', rouerModle.cart);
app.use('/order', rouerModle.order);


module.exports = app;

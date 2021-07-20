var express = require('express');
var router = express.Router();
var silly = require('silly-datetime');
let db = require('../db').userInfo
let roleDb = require('../db').roleInfo  //角色表
let menuDb = require('../db').menuInfo  //菜单表
let Token = require('../utils/tokenProving')
let md5Encry = require('../utils/md5PassWord')
let reqRules = require('../utils/reqDataRule').reqMultipleRule   //请求内容长度验证
let submitRule = require('../utils/reqDataRule').reqSubmitRule  // 必填参数 验证




/*
用户登录
  POST
*/
router.get('/', (req, res) => {
  return res.send('ok')
})

router.post('/login', (req, res, next) => {
  const { userAccount, passWord } = req.body
  if (!userAccount || !passWord) {
    return res.jsonp({
      code: 0,
      message: '操作异常'
    })
  }
  db.findOne({
    $or: [{
      userAccount
    }, {
      phone: userAccount
    }]
  }, ((err, data) => {

    if (err) {
      return res.jsonp({
        code: 0,
        message: '登陆异常'
      })
    }


    if (data) {
      if (data.status == 0) {
        return res.jsonp({
          code: 0,
          message: '账号已停用'
        })
      }
      if (data.passWord != md5Encry(passWord)) {
        return res.jsonp({
          code: 0,
          message: '账号或密码不正确'
        })
      }
      //登陆成功
      let token = Token.tokenSet()
      db.updateOne({
        $or: [{
          userAccount
        }, {
          phone: userAccount
        }]
      }, { token }, (err, data) => {
        if (err) {
          return res.jsonp({
            code: 0,
            message: '异常'
          })
        }
        return res.jsonp({
          code: 1,
          message: '登陆成功',
          data: {
            token
          }
        })
      })
      return
    }

    return res.jsonp({
      code: 0,
      message: '账号不存在'
    })

  }))

})


/*获取用户信息*/

router.post('/getuserInfo', (req, resp, next) => {
  // const token = req.headers.authorization
  const token = req.headers.authorization

  if (token) {
    db.findOne({ token }, { userRoleName: 0, token: 0, passWord: 0, _id: 0 }).then((userInfo) => {

      if (userInfo) {

        const userRole = userInfo.userRole

        //查询当前用户拥有的角色
        roleDb.find({ _id: { $in: userRole } }).then((data) => {
          if (data) {
            let roleMenu = []

            roleMenu = data.map(v => v.roleMenuList).flat()

            //找到对应的 菜单
            menuDb.find({ $or: [{ _id: { $in: roleMenu } }] }).then(menuList => {
              if (menuList.length > 0) {
                //找到对应的父级菜单
                resp.jsonp({
                  code: 1,
                  data: {
                    menuList,
                    userInfo,
                  },
                  message: '操作成功'
                })
              } else {
                resp.jsonp({
                  code: -1,
                  data: {
                    menuList,
                    userInfo,
                  },
                  message: '操作成功'
                })
              }
            })
          }
        })
      }

    })
    return
  }
  resp.jsonp({
    code: 0,
    message: '异常'
  })
})





/*获取账号列表*/

router.post('/getAccountList', (req, res, next) => {
  const { pageSize, pageNumber } = req.body
  db.find({}, { __v: 0 }, (err, data) => {

    if (err) {
      return res.jsonp({
        code: 0,
        data,
        message: '异常'
      })
    }


    return res.jsonp({
      code: 1,
      data,
      message: '操作成功'
    })

  })


})





/*
添加账号
  POST
  userAccount 账号名
  phone 手机号
  email 邮箱
*/

router.post('/addAccount', (req, res, next) => {
  const { userAccount, phone, email } = req.body
  let obj = {
    userAccount,
    passWord: '123456',
    createTime: silly.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    userRole: [],
    userRoleName: [],
    phone,
    email,
    status: 1,
  }


  if (submitRule({ userAccount, phone, email }) || reqRules({ userAccount, phone }, 40)) {
    return res.jsonp({
      code: 0,
      message: '操作异常'
    })
  }

  obj.passWord = md5Encry(obj.passWord)

  db.findOne({
    $or: [
      { userAccount },
      { phone }
    ]
  }, (err, data) => {

    if (err) {
      return res.jsonp({
        code: 0,
        message: '异常'
      })
    }
    if (data) {
      return res.jsonp({
        code: 0,
        message: '账号已存在'
      })
    }

    db.insertMany(obj, (err, data) => {
      if (err) {
        return res.jsonp({
          code: 0,
          message: '异常'
        })
      }
      return res.jsonp({
        code: 1,
        message: '添加成功'
      })
    })

  })

})

/*
   删除账户
*/

router.post('/delAccount', (req, res, next) => {
  const { id } = req.body
  db.findByIdAndRemove({ _id: id }, (err) => {
    if (err) {
      return res.jsonp({
        code: 0,
        message: '操作异常'
      })
    }
    return res.jsonp({
      code: 1,
      message: '操作成功'
    })
  })
})




/*
修改密码
*/
router.post('/editPassword', (req, res, next) => {

  const token = req.headers.authorization
  const passWord = md5Encry(req.body.passWord)
  if (!req.body.passWord || req.body.passWord.length > 30) {
    return res.jsonp({
      code: 0,
      message: '操作异常'
    })
  }

  db.updateOne({ token }, { passWord }, (err, data) => {
    if (err) {
      return res.jsonp({
        code: 0,
        message: '异常'
      })
    }
    if (data) {
      return res.jsonp({
        code: 1,
        message: '操作成功'
      })
    }

    return res.jsonp({
      code: 0,
      message: '操作异常'
    })

  })
})


/*账号启用 / 禁用*/

router.post('/accountStatusSet', (req, res, next) => {
  const { id, status } = req.body
  db.findOneAndUpdate({ _id: id }, { status }, (err, data) => {
    if (!err) {
      return res.jsonp({
        code: 1,
        message: '操作成功'
      })
    }
    return res.jsonp({
      code: 0,
      message: '参数不完整'
    })
  })
})

/*重置密码*/

router.post('/resultPassWord', (req, res, next) => {
  const { id } = req.body
  const passWord = md5Encry('123456')
  db.findOneAndUpdate({ _id: id }, { passWord }, (err, data) => {
    if (!err) {
      return res.jsonp({
        code: 1,
        message: '操作成功'
      })
    }
    return res.jsonp({
      code: 0,
      message: '参数不完整'
    })
  })
})

/* 角色分配*/
router.post('/roleAssignment', (req, res, next) => {
  const { id, userRole } = req.body

  roleDb.find({ "_id": { $in: userRole } }, (err, data) => {
    if (err) {
      return res.jsonp({
        code: 0,
        message: '异常'
      })
    }
    const userRoleName = data.map(v => v.name)

    db.findOneAndUpdate({ _id: id }, { userRole, userRoleName }, (err, data) => {
      if (!err) {
        return res.jsonp({
          code: 1,
          message: '操作成功'
        })
      }

      return res.jsonp({
        code: 0,
        message: '异常'
      })
    })

  })

})




/* POST */
router.post('/reqbody', function (req, res, next) {

  let arr = []
  for (let i = 0; i < 10; i++) {
    arr.push({
      new_price: Math.floor(Math.random() * 1000),
      sort: i + 1,
    })
  }
  // console.log(req.header)

  res.jsonp({
    data: req.headers
  })
  // db.insertMany(arr)



  // db.aggregate([
  //   {
  //     $lookup: {
  //       from: "shopList",
  //       localField: "_id",
  //       foreignField: "shop_id",
  //       as: 'shopInfo'
  //     }
  //   }, {
  //     $project: {
  //       _id: 0,
  //       shopInfo: {
  //         _id: 0
  //       }
  //     },
  //   },
  //   // {
  //   //   $match:{
  //   //     "new_price":{$gte:490}
  //   //   }
  //   // },
  //   // {
  //   //   $sort: {
  //   //     "sort": -1
  //   //   }
  //   // },
  //   // {
  //   //   $limit:2
  //   // }

  // ], (err, data) => {
  //   res.jsonp({
  //     data
  //   })
  // })


});




module.exports = router;

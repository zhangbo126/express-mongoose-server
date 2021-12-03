let express = require('express');
let router = express.Router();
let silly = require('silly-datetime');
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
      }, { token }, (err, userInfo) => {
        if (err) {
          return res.jsonp({
            code: 0,
            message: '异常'
          })
        }
        data.token=token
        return res.jsonp({
          code: 1,
          message: '登陆成功',
          data,
         
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
        roleDb.find({ "_id": { $in: userRole } }).then((data) => {
          if (data) {
            let roleMenu = []
            roleMenu = data.map(v => v.roleMenu_List).flat()

            //找到对应的 菜单
            menuDb.find({ $or: [{ "_id": { $in: roleMenu } }] }).then(menuList => {
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
  const { pageSize, pageNumber, userAccount, phone, status, email } = req.body
  let queryInfo = {
    $or: []
  }

  queryHandle({ userAccount, status, phone, email }, queryInfo)
  db.count({}, (err, count) => {
    db.find(queryInfo, { __v: 0 }, (err, data) => {
      if (err) {
        return res.jsonp({
          code: 0,
          message: '异常'
        })
      }

      return res.jsonp({
        code: 1,
        data,
        count: queryInfo.$or ? data.length : count,
        message: '操作成功'
      })
    }).skip((pageNumber - 1) * 10).limit(pageSize)
  })


})


//查询参数数据处理
function queryHandle(queryInfo, query) {
  for (let i in queryInfo) {
    if (queryInfo[i] != null) {
      if (i == 'userAccount' || i == "phone" || i == 'email') {
        const obj = {
          [i]: { $regex: new RegExp(queryInfo[i]) }
        }
        return query.$or.push(obj)
      }
      const obj = {
        [i]: queryInfo[i]
      }
      query.$or.push(obj)
    }
  }
  if (query.$or.length == 0) {
    delete query.$or
  }
}


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
    userType: 1,
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
 修改密码 原密码验证
*/
router.post('/editPasswordTesting', (req, res, next) => {

  const token = req.headers.authorization
  const passWord = md5Encry(req.body.passWord)

  db.findOne({ token }).then(data => {
    if (data && data.passWord == passWord) {
      return res.jsonp({
        code: 1,
        message: '操作成功'
      })
    } else {
      return res.jsonp({
        code: 0,
        message: '原密码不正确'
      })
    }
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
  const passWord = md5Encry('zb123456')
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




/*小程序用户注册*/

router.post('/registerAccount', (req, res, next) => {

  const { userAccount, phone, passWord } = req.body
  let obj = {
    userAccount,
    passWord: md5Encry(passWord),
    createTime: silly.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    userRole: [],
    userRoleName: [],
    phone,
    email: null,
    userType: 2,
    status: 1,
  }

  if (submitRule({ userAccount, phone, passWord }) || reqRules({ userAccount, phone }, 40)) {
    return res.jsonp({
      code: 0,
      message: '操作异常'
    })
  }

  db.findOne({ $or: [{ userAccount, phone }] }).then(data => {
    if (data) {
      return res.jsonp({
        code: 0,
        message: '该账号已被注册'
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



module.exports = router;

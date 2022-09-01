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
let queryInfoHandle = require('../utils/queryInfoHandle')
//需要添加正则验证的参数
const regexQueryKeyList = ["userAccount", "phone", "email"]

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
  const find = { $or: [{ userAccount }, { phone: userAccount }] }
  db.findOne(find, ((err, data) => {

    try {
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
        const update = { $or: [{ userAccount }, { phone: userAccount }] }
        db.updateOne(update, { token }, (err, userInfo) => {
          data.token = token
          return res.jsonp({
            code: 1,
            message: '登陆成功',
            data,

          })
        })
      } else {
        res.jsonp({
          code: 0,
          message: '账号不存在'
        })
      }
    } catch {
      next({ message: '接口错误' })
    }
  }))
})



/*获取用户信息*/

router.post('/getuserInfo', (req, resp, next) => {
  const token = req.headers.authorization
  try {
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
    }
  } catch {
    next({ message: '接口错误' })
  }
})





/*获取账号列表*/

router.post('/getAccountList', (req, res, next) => {
  try {
    const { pageSize, pageNumber, userAccount, phone, status, email } = req.body
    let queryInfo = {
      $or: []
    }
    const queryMap = { userAccount, status, phone, email }
    queryInfoHandle(queryMap, regexQueryKeyList, queryInfo)
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
  } catch {
    next({ message: '接口错误' })
  }
})





/*
添加账号
  POST
  userAccount 账号名
  phone 手机号
  email 邮箱
*/

router.post('/addAccount', (req, res, next) => {

  try {
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
    const find = { $or: [{ userAccount }, { phone }] }
    db.findOne(find, (err, data) => {

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
  } catch {
    next({ message: '接口错误' })
  }
})

/*
   删除账户
*/

router.post('/delAccount', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})


/*
 修改密码 原密码验证
*/
router.post('/editPasswordTesting', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})

/*
修改密码
*/
router.post('/editPassword', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})


/*账号启用 / 禁用*/

router.post('/accountStatusSet', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})

/*重置密码*/

router.post('/resultPassWord', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})

/* 角色分配*/
router.post('/roleAssignment', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})


/*小程序用户注册*/
router.post('/registerAccount', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})



module.exports = router;

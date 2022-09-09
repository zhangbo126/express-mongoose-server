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

/** 
 * 用户登录
 * @param {String} userAccount 账号
 * @param {String} passWord 密码
 * @type {POST}
 * @return {data} 
*/

router.post('/login', async (req, res, next) => {
    const { userAccount, passWord } = req.body
    if (!userAccount || !passWord) {
      return res.jsonp({
        code: 0,
        message: '操作异常'
      })
    }
    const find = { $or: [{ userAccount }, { phone: userAccount }] }
    try{
      let findAccount = await db.findOne(find)
      if(!findAccount){
        return   res.jsonp({ code: 0,message: '账号不存在'})  
      }
      const { status } = findAccount
      //判断账号状态
      if (status == 0) {
        return res.jsonp({ code: 0, message: '账号已停用' })
      }
      //检测密码是否正确
       if (findAccount.passWord != md5Encry(passWord)) {
          return res.jsonp({ code: 0, message: '账号或密码不正确' })           
       }
       //登陆成功
        let token = Token.tokenSet()
        const update = { $or: [{ userAccount }, { phone: userAccount }] }
        await db.updateOne(update, { token })
        findAccount.token = token
        return res.jsonp({code: 1, message: '登陆成功', data:findAccount})
      
    }catch{
      next({ message: '接口错误' })
    }

})



/** 
 * 获取登录用户信息
 * @param {String} token 登录用户token
 * @type {POST}
 * @return {menuList, userInfo} 菜单列表，用户信息
*/
router.post('/getuserInfo', async (req, resp, next) => {
  const token = req.headers.authorization
  try {
    if (token) {
      // 查询当前用户信息
      let userInfo = await db.findOne({ token }, { userRoleName: 0, token: 0, passWord: 0, _id: 0 })
      const userRole = userInfo.userRole
      //查询当前用户拥有的角色
      let findRoule = await roleDb.find({ "_id": { $in: userRole } })
      if (findRoule) {
        let roleMenu = []
        //二维数组转换一维数组
        roleMenu = findRoule.map(v => v.roleMenu_List).flat()
        //找到对应的 菜单      
        let menu = await menuDb.find({ $or: [{ "_id": { $in: roleMenu } }]}).sort({ 'sort': 1 })
        // 过滤出是菜单类型的
        let menuList = menu.filter(v=>v.menuType==1)
        //过滤出是按钮类型的
        let btnAuthList =menu.filter(v=>v.menuType==2).map(v=>v.key)
          //返回前端数据
        let data = { menuList, userInfo,btnAuthList }
        if (menuList.length > 0) {
          //找到对应的父级菜单
          resp.jsonp({
            code: 1,
            data,
            message: '操作成功'
          })
        } else {
          resp.jsonp({
            code: -1,
            data,
            message: '操作成功'
          })
        }
      }
    }
  } catch {
    next({ message: '接口错误' })
  }
})



/** 获取账号列表
 * @param {String} userAccount 用户账号
 * @param {Number} phone 用户手机号
 * @param {Number} status 账号状态
 * @param {String} email 邮箱
 * @type {POST}
 * @return {data, count}
*/
router.post('/getAccountList', async (req, res, next) => {
  try {
    const { pageSize, pageNumber, userAccount, phone, status, email } = req.body
    let queryInfo = {
      $or: []
    }
    const queryMap = { userAccount, status, phone, email }
    queryInfoHandle(queryMap, regexQueryKeyList, queryInfo)
    let count = await db.count({})
    let findData = await db.find(queryInfo, { __v: 0 }).skip((pageNumber - 1) * 10).limit(pageSize)
    res.jsonp({
      code: 1,
      data: findData,
      count: queryInfo.$or ? findData.length : count,
      message: '操作成功'
    })
  } catch {
    next({ message: '接口错误' })
  }
})





/**
添加账号
 * @param {String} userAccount 账号名
 * @param {Number} phone 手机号
 * @param {String} email 邮箱
 * @type {POST}
 * @return 
*/
router.post('/addAccount',async (req, res, next) => {
  try {
    const { userAccount, phone, email } = req.body
    //初始添加信息
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
      return res.jsonp({code: 0, message: '操作异常'})    
    }
   //密码加密
    obj.passWord = md5Encry(obj.passWord)
    const find = { $or: [{ userAccount }, { phone }] }
    //查找账号
    let findData =await db.findOne(find)
    if(findData){
      return res.jsonp({code: 0,message: '账户名称或联系方式已存在'})   
    }
    //新增账号
    await db.insertMany(obj)
    return res.jsonp({code: 1,message: '添加成功'})   
  } catch {
    next({ message: '接口错误' })
  }
})

/**
   删除账户
 * @param {String} id 账号ID
 * @type {POST}
 * @return 
*/

router.post('/delAccount', async (req, res, next) => {
  try {
    const { id } = req.body
    await  db.findByIdAndRemove({ _id: id })
    return res.jsonp({ code: 1,message: '操作成功' })
  } catch {
    next({ message: '接口错误' })
  }
})


/** 
 *  修改密码验证
  * @param {String} token token
  * @param {String} passWord 密码
  * @type {POST}
 * @return 
*/
router.post('/editPasswordTesting', async(req, res, next) => {
  try {
    const token = req.headers.authorization
    //密码加密
    const passWord = md5Encry(req.body.passWord)
    let findData = db.findOne({ token })
    //判断原密码是否输入正确
    if(findData && findData.passWord==passWord){
       return res.jsonp({code: 1, message: '操作成功'})
    }else{
      return res.jsonp({code: 0, message: '原密码不正确'})
    }
  } catch {
    next({ message: '接口错误' })
  }
})

/** 
    修改密码
  * @param {String} token token
  * @param {String} passWord 密码
  * @type {POST}
 * @return 
*/
router.post('/editPassword',async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const passWord = md5Encry(req.body.passWord)
    if (!req.body.passWord || req.body.passWord.length > 30) {
         return res.jsonp({code: 0,message: '操作异常' })   
    }
    //修改密码
    let updateData = await db.updateOne({ token },{ passWord })
    if(updateData){
      return res.jsonp({code: 1,message: '操作成功'})
    }else{
      res.jsonp({code: 0,message: '操作异常'}) 
    }

  } catch {
    next({ message: '接口错误' })
  }
})


/** 
账号启用 / 禁用
  * @param {String} id 账号ID
  * @param {String} status 状态
  * @type {POST}
  * @return 
*/

router.post('/accountStatusSet', async (req, res, next) => {
  try {
    const { id, status } = req.body
    await db.findOneAndUpdate({ _id: id }, { status })
    res.jsonp({code: 1,message: '操作成功'})
  } catch {
    next({ message: '接口错误' })
  }
})


/** 
重置密码
  * @param {String} id 账号ID
  * @type {POST}
  * @return 
*/
router.post('/resultPassWord',async (req, res, next) => {
  try {
    const { id } = req.body
    const passWord = md5Encry('zb123456')
    await db.findOneAndUpdate({ _id: id }, { passWord })
    res.jsonp({code: 1,message: '操作成功'})
  } catch {
    next({ message: '接口错误' })
  }
})

/** 
角色分配
  * @param {String} id 账号ID
  * @param {Array} userRole 角色ID
  * @type {POST}
  * @return 
*/
router.post('/roleAssignment', async(req, res, next) => {
  try {
    const { id, userRole } = req.body
    //找到当前账号已有角色
    let roleData = await  roleDb.find({ "_id": { $in: userRole } })
    const userRoleName = roleData.map(v => v.name)
    //更新当前账号角色
    await db.findOneAndUpdate({ _id: id }, { userRole, userRoleName })
    res.jsonp({code: 1, message: '操作成功'})
  } catch {
    next({ message: '接口错误' })
  }
})


/*小程序用户注册*/
router.post('/registerAccount', async (req, res, next) => {
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

    let findData = await db.findOne({ $or: [{ userAccount, phone }] })
    if (findData) {
      return res.jsonp({ code: 0,message: '该账号已被注册' })  
    }
    await  db.insertMany(obj)
    return res.jsonp({ code: 1,message: '添加成功' })  
  } catch {
    next({ message: '接口错误' })
  }
})



module.exports = router;

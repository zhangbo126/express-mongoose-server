let express = require('express');
let router = express.Router();
let db = require('../db').informationInfo
let silly = require('silly-datetime');
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let queryInfoHandle = require('../utils/queryInfoHandle')
// 需要添加正则验证的参数
const regexQueryKeyList = ["goodsName", "placeOrigin", "brandName", "categoryName", "goodsNo", "skuName"]

/** 
 * 新增信息
 * @param {String} name 名称
 * @param {String} status 状态
 * @param {String} content 内容
 * @param {String} imageFilePath 图片
 * @type {POST}
*/
router.post('/addInformation', (req, res, next) => {
    try {
        const { name, status, content, imageFilePath } = req.body
        if (submitRule({ name, status, content })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }

        const obj = { name, imageFilePath, status: 1, content, createTime: silly.format(new Date(), 'YYYY-MM-DD') }
        db.insertMany(obj, (err, data) => {
            return res.jsonp({  code: 1, message: '操作成功'})         
        })
    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 结束活动
 * @param {String} id id
 * @type {POST}
*/
router.post('/stopActivity', (req, res, next) => {
    try {
        const { id } = req.body
        db.findByIdAndUpdate({ _id: id }, { status: 0 }).then(data => {
            return res.jsonp({
                code: 1,
                message: '操作成功'
            })
        })
    } catch {
        next({ message: '接口错误' })
    }

})
/** 
 * 删除活动
 * @param {String} id id
 * @type {POST}
*/
router.post('/delActivity', (req, res, next) => {
    try {
        const { id } = req.body
        db.findByIdAndDelete({ _id: id }).then(data => {
            return res.jsonp({
                code: 1,
                message: '操作成功'
            })
        })
    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 获取活动列表
 * @param {String} name 名称
 * @param {Number} status 状态
 * @param {String} statusSort 
 * @type {POST}
*/
router.post('/getActivityList',async (req, res, next) => {
   try{
    const { pageSize, pageNumber, name, status, statusSort } = req.body
    let queryInfo = {
        $or: []
    }
    const queryMap ={ name, status }
    queryInfoHandle(queryMap,regexQueryKeyList,queryInfo)
    //获取总页数
    let count = await  db.count({})
    //查询列表
    let data =await  db.find(queryInfo, { __v: 0 }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ status: statusSort })
    return  res.jsonp({ code: 1,data,count: queryInfo.$or ? data.length : count,message: '操作成功'})
   }catch{
      next({ message: '接口错误' })
   }
})


module.exports = router;
var express = require('express');
var router = express.Router();
let db = require('../db').brandInfoList
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let replaceImgUrl = require('../utils/imgUrl')
let queryInfoHandle = require('../utils/queryInfoHandle')
const regexQueryKeyList = ["name"]

/** 
 * 新增品牌
 * @param {String} name 品牌名称
 * @param {String} logoFilePath 图片
 * @param {Number} sort 排序
 * @param {String} introduce 描述
 * @type {POST}
*/

router.post('/addBrand',async(req, res, next) => {
    try {
        const { name, logoFilePath, sort, introduce } = req.body
        if (submitRule({ name })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        if (reqRules({ name })) {
            return res.jsonp({ code: 0, message: '异常' })     
        }
        //查找该品牌是否存在
        let findData = await db.findOne({ name })
        if(findData){
            return res.jsonp({ code: 0,message: '品牌名称已存在' })       
        }
        const obj = { name, logoFilePath, status: 1, sort, introduce }
        await db.insertMany(obj)
        return res.jsonp({ code: 1,message: '操作成功' })   
    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 编辑品牌
 * @param {String} name 品牌名称
 * @param {String} logoFilePath 图片
 * @param {Number} sort 排序
 * @param {String} introduce 描述
 * @param {String} _id 品牌id
 * @type {POST}
*/

router.post('/editBrand',async(req, res, next) => {
    try {
        const { name, logoFilePath, sort, introduce, _id } = req.body
        if (submitRule({ name, _id })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        if (reqRules({ name })) {
            return res.jsonp({
                code: 0,
                message: '异常'
            })
        }
        const obj = {
            name, logoFilePath, sort, introduce, _id
        }
        await  db.updateOne({ _id }, obj)
        return res.jsonp({code: 1,message: '操作成功'})
    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 删除品牌
 * @param {String} _id 品牌id
 * @type {POST}
*/
router.post('/delBrand', (req, res, next) => {
     try{
        const { _id } = req.body
        if (submitRule({ _id })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
    
        db.findByIdAndDelete({ _id }).then(data => {
            return res.jsonp({
                code: 1,
                message: '操作成功'
            })
        })
     }catch{
        next({ message: '接口错误' })
     }
})

/** 
 * 获取品牌列表
 * @param {String} name 品牌名称
 * @param {String} status 状态
 * @param {String} partentName 父级名称
 * @type {POST}
 * @return {data,count} 
*/
router.post('/getBrandList', async(req, res, next) => {
    try{
        const { pageSize, pageNumber, name, status, partentName } = req.body
        let queryInfo = {
            $or: []
        }
        const queryMap={name, status, partentName }
        queryInfoHandle(queryMap,regexQueryKeyList,queryInfo)
        //查询总页数
        let count = await db.count(queryInfo).count(true)
        let findData = await db.find(queryInfo, { __v: 0 }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ 'sort': 1 })
        //处理获取到的数据
        let data = findData.map(v => {
            v.logoFilePath = replaceImgUrl(v.logoFilePath)
            return v
        })   
        return res.jsonp({code:1,data,count,message:'操作成功'})
        
     }catch{
        next({ message: '接口错误' })    
    }
})


module.exports = router;
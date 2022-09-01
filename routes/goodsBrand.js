var express = require('express');
var router = express.Router();
let db = require('../db').brandInfoList
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let replaceImgUrl = require('../utils/imgUrl')
let queryInfoHandle = require('../utils/queryInfoHandle')
const regexQueryKeyList = ["name"]

/*
  新增品牌
*/

router.post('/addBrand', (req, res, next) => {
    try {
        const { name, logoFilePath, sort, introduce } = req.body
        if (submitRule({ name })) {
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
        db.findOne({ name }, (err, data) => {
            if (data) {
                return res.jsonp({
                    code: 0,
                    message: '品牌名称已存在'
                })
            }

            const obj = { name, logoFilePath, status: 1, sort, introduce }
            db.insertMany(obj, (err, data) => {
                if (err) {
                    return res.jsonp({
                        code: 0,
                        message: '异常'
                    })
                }
                return res.jsonp({
                    code: 1,
                    message: '操作成功'
                })
            })
        })
    } catch {
        next({ message: '接口错误' })
    }
})


/*编辑品牌*/

router.post('/editBrand', (req, res, next) => {
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
        db.updateOne({ _id }, obj, (err, data) => {
            if (err) {
                return res.jsonp({
                    code: 0,
                    message: '异常'
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

/*删除品牌*/
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


/*获取品牌列表*/
router.post('/getBrandList', (req, res, next) => {
    try{
        const { pageSize, pageNumber, name, status, partentName } = req.body
        let queryInfo = {
            $or: []
        }
        const queryMap={name, status, partentName }
        queryInfoHandle(queryMap,regexQueryKeyList,queryInfo)
        db.count(queryInfo, (err, count) => {
            db.find(queryInfo, { __v: 0 }, (err, data) => {
                let resData = data.map(v => {
                    v.logoFilePath = replaceImgUrl(v.logoFilePath)
                    return v
                })
                return res.jsonp({
                    code: 1,
                    data: resData,
                    count,
                    message: '操作成功'
                })
            }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ 'sort': 1 })
        }).count(true)
     }catch{
        next({ message: '接口错误' })    
    }
})


module.exports = router;
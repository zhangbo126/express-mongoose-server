var express = require('express');
var router = express.Router();
let db = require('../db').goodsClassInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule











/*新增商品分类*/
router.post('/addGoodsClass', (req, res, next) => {

    const { name, logoFilePath, sort, partentId } = req.body
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
                message: '分类名称已存在'
            })
        }

        db.findOne({ _id: partentId }).then(data => {
            const obj = { name, logoFilePath, status: 1, sort, partentId, partentName: data.name }
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

    })
})


/*编辑商品分类*/

router.post('/editGoodsClass', (req, res, next) => {

    const { name, logoFilePath, status, partentId, sort, _id } = req.body
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

    db.findOne({ _id: partentId }).then(data => {

        const obj = {
            name, logoFilePath, status, partentId, sort, _id, partentName: data.name || null
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

    })

})


/*获取分类列表*/

router.post('/getGoodsClassList', (req, res, next) => {

    const { pageSize, pageNumber, name, status, partentName } = req.body
    let queryInfo = {
        $or: []
    }

    queryHandle({ name, status, partentName }, queryInfo)
    db.count({}, (err, count) => {
        db.find(queryInfo, { __v: 0 }, (err, data) => {
            return res.jsonp({
                code: 1,
                data,
                count,
                message: '操作成功'
            })
        }).skip((pageNumber - 1) * 10).limit(pageSize)
    })

})

//查询参数数据处理
function queryHandle(queryInfo, query) {
    for (let i in queryInfo) {
        if (queryInfo[i] != null) {
            //判断需要正则验证的 参数
            if (i == 'name' || i == 'partentName') {
                const obj = {
                    [i]: { $regex: new RegExp(queryInfo[i], 'i') }
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




module.exports = router;
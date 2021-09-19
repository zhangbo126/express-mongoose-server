var express = require('express');
var router = express.Router();
let db = require('../db').classInfoList
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule



/*新增商品分类*/
router.post('/addClass', (req, res, next) => {

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
        if (partentId) {
            db.findOne({ _id: partentId }).then(data => {
                const obj = { name, logoFilePath, status: 1, sort, partentId: partentId || null, partentName: data.name }
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
            return
        }
        const obj = { name, logoFilePath, status: 1, sort }
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


/*编辑商品分类*/

router.post('/editClass', (req, res, next) => {

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



    db.findOne({ partentId: _id }).then(data => {
        //判断当前编辑分类下是否有子分类
        if (data && partentId) {
            return res.jsonp({
                code: 0,
                message: '当前分类下已有子分类'
            })
        }

        db.findOne({ _id: partentId }).then(partentData => {
            const partent = partentData || {}
            const obj = {
                name, logoFilePath, status, partentId, sort, _id, partentName: partent.name || null
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

})


/*删除分类*/

router.post('/delClass', (req, res, next) => {
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

})


/*获取分类列表*/

router.post('/getClassList', (req, res, next) => {

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
                count: queryInfo.$or ? data.length : count,
                message: '操作成功'
            })
        }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ 'sort': 1 })
    })

})

/*获取父级分类*/
router.post('/getPartentClass', (req, res, next) => {

    db.find({ partentId: null }, { __v: 0 }, (err, data) => {
        return res.jsonp({
            code: 1,
            data,
            message: '操作成功'
        })
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
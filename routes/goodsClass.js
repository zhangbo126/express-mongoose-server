var express = require('express');
var router = express.Router();
let db = require('../db').classInfoList
let dbGoods = require('../db').goodsInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let replaceImgUrl = require('../utils/imgUrl')
let queryInfoHandle = require('../utils/queryInfoHandle')
//需要添加正则验证的参数
const regexQueryKeyList = ["name", "partentName"]


/*新增商品分类*/
router.post('/addClass', (req, res, next) => {
    try {
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
    } catch {
        next({ message: '接口错误' })
    }
})


/*编辑商品分类*/

router.post('/editClass', (req, res, next) => {
    try {
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
    } catch {
        next({ message: '接口错误' })
    }
})


/*删除分类*/
router.post('/delClass', (req, res, next) => {
    try {
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
    } catch {
        next({ message: '接口错误' })
    }
})


/*获取分类列表*/
router.post('/getClassList', (req, res, next) => {
    try {
        const { pageSize, pageNumber, name, status, partentName } = req.body
        let queryInfo = {
            $or: []
        }
        const queryMap = { name, status, partentName }
        queryInfoHandle(queryMap, regexQueryKeyList, queryInfo)
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
    } catch {
        next({ message: '接口错误' })
    }
})




/*获取父级分类*/
router.post('/getPartentClass', (req, res, next) => {
    try {
        db.find({ partentId: null }, { __v: 0 }, (err, data) => {
            return res.jsonp({
                code: 1,
                data,
                message: '操作成功'
            })
        })
    } catch {
        next({ message: '接口错误' })
    }
})


/*小程序获取分类 层级*/

router.post('/getClassTree', (req, res, next) => {
    try {
        db.find({}, { __v: 0 }, (err, data) => {
            const tree = []
            const menu = data
            listToTree(menu, tree, null)

            return res.jsonp({
                code: 1,
                data: tree,
                message: '操作成功'
            })
        })
        const listToTree = (list, tree, partentId) => {
            list.forEach(item => {
                // 判断是否为父级菜单

                if (item.partentId == partentId) {
                    item.children = []
                    const child = item
                    // 迭代 list， 找到当前菜单相符合的所有子菜单
                    listToTree(list, child.children, item._id)
                    // 删掉不存在 children 值的属性
                    if (child.children.length <= 0) {
                        delete child.children
                    }
                    const children = child.children
                    let result = JSON.parse(JSON.stringify(child))
                    result.children = children
                    result.logoFilePath = replaceImgUrl(result.logoFilePath)
                    // 加入到树中
                    tree.push(result)
                }
            })

        }
    } catch {
        next({ message: '接口错误' })
    }
})


/*小程序根据类型获取分类列表*/
router.post('/getClassTypeList', (req, res, next) => {
    try {
        const { price, categoryId, salesVolume } = req.body
        db.find({ partentId: categoryId }).then(ids => {
            //找到当前分类下的子分类
            const categoryIds = ids.map(v => v._id)
            dbGoods.find({ "categoryId": { $in: categoryIds } }, { __v: 0 }, (err, data) => {
                let resData = data
                resData.forEach(v => {
                    v.designSketch = v.designSketch.map(url => {
                        return url = replaceImgUrl(url)
                    })
                })
                return res.jsonp({
                    code: 1,
                    data: resData,
                    message: '操作成功'
                })
            }).sort({ price, salesVolume })
        })
    } catch {
        next({ message: '接口错误' })
    }
})

module.exports = router;
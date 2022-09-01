var express = require('express');
var router = express.Router();
let db = require('../db').menuInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule



/*
新增
*/

router.post('/addMenu', (req, res, next) => {
    try {
        const { name, icon, component, url, redirectUrl, sort, key, parentId, children } = req.body

        if (submitRule({ name, component, url, key })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }

        if (reqRules({ name, component, url, sort, key }, 40)) {
            return res.jsonp({
                code: 0,
                message: '异常'
            })
        }


        const obj = {
            name, status: 1, icon, component, url, redirectUrl, sort, key, parentId, children
        }
        //判断 菜单唯一标识 是否被占用
        db.findOne({ key }, (err, data) => {

            if (err) {
                return res.jsonp({
                    code: 0,
                    message: '异常'
                })
            }

            if (data) {
                return res.jsonp({
                    code: 0,
                    message: '标识已被使用'
                })

            } else {
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
            }
        })
    } catch {
        next({ message: '接口错误' })

    }
})

/*
  修改
*/
router.post('/editMenu', (req, res, next) => {
    try {
        const { name, status, icon, component, url, redirectUrl, sort, key, parentId, children, id } = req.body

        if (submitRule({ name, component, url, key })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }

        if (reqRules({ name, component, url, redirectUrl, sort, key, id }, 40)) {
            return res.jsonp({
                code: 0,
                message: '异常'
            })
        }

        const obj = {
            name, status, icon, component, url, redirectUrl,
            children: children || [],
            sort,
            key,
            parentId, id
        }
        //判断 菜单唯一标识 是否被占用

        db.findOne({ key }, (err, data) => {

            if (err) {
                return res.jsonp({
                    code: 0,
                    message: '异常'
                })
            }

            if (data && data.id != id) {
                return res.jsonp({
                    code: 0,
                    message: '标识已被使用'
                })
            }
        }).exec(() => {
            db.updateOne({ _id: id }, obj, (err, data) => {
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


/*
   状态启用 / 停用
   status 0 停用  1 启用
*/

router.post('/setStatus', (req, res, next) => {
    try {
        const { status, id } = req.body
        if (submitRule({ status, id })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        if (![0, 1].includes(status)) {
            return res.jsonp({
                code: 0,
                message: '参数不正确'
            })
        }

        db.updateOne({ _id: id }, { status }, (err, data) => {
            if (err) {
                return res.jsonp({
                    code: 0,
                    message: '异常'
                })
            }
            if (data.ok == 1) {
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
    } catch {
        next({ message: '接口错误' })
    }
})


/*
 删除
*/

router.post('/removeMenu', (req, res, next) => {
    try {
        const { id } = req.body
        if (submitRule({ id })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        db.findByIdAndRemove({ _id: id }, (err, data) => {
            if (data) {
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
    } catch {
        next({ message: '接口错误' })
    }
})


/*  获取树形结构 菜单 */

router.post('/getMenuTree', (req, res, next) => {
    try {
        const { pageSize, pageNumber } = req.body
        db.find({}, { __v: 0 }, (err, data) => {
            const menu = data
            //树型结构数据处理
            const tree = []
            listToTree(menu, tree, null)
            return res.jsonp({
                code: 1,
                data: tree,
                message: '操作成功'
            })
        }).skip(pageNumber - 1).limit(pageSize)

        const listToTree = (list, tree, parentId) => {
            list.forEach(item => {
                // 判断是否为父级菜单
                if (item.parentId == parentId) {
                    item.children = []
                    const child = item
                    // 迭代 list， 找到当前菜单相符合的所有子菜单
                    listToTree(list, child.children, item._id)
                    // 删掉不存在 children 值的属性
                    if (child.children.length <= 0) {
                        delete child.children
                    }
                    // 加入到树中
                    tree.push(child)
                }
            })
        }
    } catch {
        next({ message: '接口错误' })
    }
})


/*获取列表结构 菜单*/
router.post('/getMenuList', (req, res, next) => {
    try {
        db.find({}, { __v: 0 }, (err, data) => {
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




module.exports = router;




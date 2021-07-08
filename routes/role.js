var express = require('express');
var router = express.Router();
let db = require('../db').roleInfo
let dbMenu = require('../db').menuInfo


let reqRules = require('../utils/reqDataRule').reqMultipleRule   //请求内容长度验证
let submitRule = require('../utils/reqDataRule').reqSubmitRule  // 必填参数 验证



/*新增角色*/

router.post('/addRole', (req, res, next) => {

    const { name, describe, roleMenuList } = req.body
    if (submitRule({ name, roleMenuList })) {
        return res.jsonp({
            code: 0,
            message: '参数不完整'
        })

    }
    if (reqRules({ name, describe }, 40)) {
        return res.jsonp({
            code: 0,
            message: '异常'
        })
    }

    const obj = { name, describe, status: 1, roleMenuList }
    db.insertMany(obj, (err, data) => {
        if (!err) {
            return res.jsonp({
                code: 1,
                message: '操作成功'
            })
        }
    })
})


/*新增获取菜单树形结构*/
router.post('/addGetMenuTree', (req, res, next) => {
    dbMenu.find({}, { __v: 0 }, (err, data) => {

        const menu = data
        //树型结构数据处理
        const tree = []
        listToTree(menu, tree, null)
        return res.jsonp({
            code: 1,
            data: tree,
            message: '操作成功'
        })
    })

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
})

/*编辑时获取菜单树形结构*/

router.post('/editGetMenuTree', (req, res, next) => {
    const { id } = req.body
    //根据用户ID 找到 对应的菜单
    db.findOne({ _id: id }).then((data) => {
        if (data) {
            dbMenu.find().then((menu) => {
                const menuIdList = data.roleMenuList
                let list = JSON.parse(JSON.stringify(menu))
                changeListTree(list, menuIdList)   // 根据ID 匹配已选择的 菜单 
                let tree = []
                listToTree(list, tree, null)
                return res.jsonp({
                    code: 1,
                    data: tree,
                    message: '操作成功'
                })
            })

        }
    })

    const listToTree = (list, tree, parentId) => {
        list.forEach(item => {
            // 判断是否为父级菜单
            if (item.parentId == parentId) {
                item.children = []
                let child = item
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

    //判断已选中的 菜单
    const changeListTree = (menu, menuIdList) => {
        //isChange 1 已选择  0 未选择
        menuIdList.forEach(id => {
            menu.forEach(v => {
                v.isChange = 0
                if (v._id == id) {
                    v.isChange = 1
                }
            })
        })
    }

})


/*编辑角色*/
router.post('/editRole', (req, res, next) => {

    const { name, describe, roleMenuList, id } = req.body
    if (submitRule({ name, roleMenuList, id })) {
        return res.jsonp({
            code: 0,
            message: '参数不完整'
        })
    }
    if (reqRules({ name, describe }, 40)) {
        return res.jsonp({
            code: 0,
            message: '异常'
        })
    }

    const obj = { name, describe, roleMenuList }
    db.findOneAndUpdate({ _id: id }, obj, (err, data) => {
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


/*角色停用/启用*/

router.post('/setStatus', (req, res, next) => {

    const { status, id } = req.body
    if (submitRule({ status })) {
        return res.jsonp({
            code: 0,
            message: '参数不完整'
        })
    }
    if (![0, 1].includes(status)) {
        return res.jsonp({
            code: 0,
            message: '状态值设置不正确'
        })
    }
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


/* 获取角色列表 */
router.post('/getRoleList', (req, res, next) => {
    const { pageSize, pageNumber } = req.body

    db.find({}, { __v: 0 ,roleMenuList:0}, (err, data) => {
       
        return res.jsonp({
            code: 1,
            data,
            count:data.length,
            message: '操作成功'
        })

    }).limit(pageSize).skip(pageNumber)
})





module.exports = router;
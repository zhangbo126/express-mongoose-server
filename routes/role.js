var express = require('express');
var router = express.Router();
let db = require('../db').roleInfo
let dbMenu = require('../db').menuInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule   //请求内容长度验证
let submitRule = require('../utils/reqDataRule').reqSubmitRule  // 必填参数 验证
let queryInfoHandle = require('../utils/queryInfoHandle')
let webScoket = require('../utils/webScoket') //scoket方法

//需要添加正则验证的参数
const regexQueryKeyList = ["name"]


/** 
 * 新增角色
 * @param {String} describe 角色描述
 * @param {String} name 名称
 * @param {Array} roleMenu_List 菜单列表
 * @type {POST}
*/
router.post('/addRole', async (req, res, next) => {
    try {
        const { name, describe, roleMenu_List } = req.body
        if (submitRule({ name, describe })) {
            return res.jsonp({ code: 0, message: '参数不完整' })
        }
        if (reqRules({ name, describe }, 40)) {
            return res.jsonp({
                code: 0,
                message: '异常'
            })
        }

        const obj = { name, describe, status: 1, roleMenu_List }
        //根据id 找到对应菜单
        let findMenu = await dbMenu.find({ "_id": { $in: roleMenu_List } })
        obj.roleMenuName_List = findMenu.map(v => v.name)
        //更新角色菜单
        await db.insertMany(obj)
        return res.jsonp({ code: 1, message: '操作成功' })
    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 新增获取菜单树形结构
 * @type {POST}
 * @return {data} 
*/

router.post('/addGetMenuTree', (req, res, next) => {
    try {
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
        }).sort({ 'sort': 1 })

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

/** 
 * 编辑时获取菜单树形结构
 * @param {String} id 菜单id
 * @type {POST}
*/
router.post('/editGetMenuTree', (req, res, next) => {
    try {
        const { id } = req.body
        //根据用户ID 找到 对应的菜单
        db.findOne({ _id: id }, { _v: 0 }).then((data) => {
            if (data) {
                dbMenu.find({}, { _v: 0 }).sort({ 'sort': 1 }).then((menu) => {
                    const menuIdList = data.roleMenu_List
                    let list = JSON.parse(JSON.stringify(menu))
                    let menuList = []
                    listToTree(list, menuList, null)
                    const resData = {
                        menuList,
                        selectMenuIdList: menuIdList
                    }
                    return res.jsonp({
                        code: 1,
                        data:resData,
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
                    // if (child.children.length <= 0) {
                    //     delete child.children
                    // }
                    // 加入到树中
                    tree.push(child)
                }
            })
        }

        //判断已选中的 菜单
        const changeListTree = (menu, menuIdList) => {

            let changeRole = []
            //找到当前角色已选择的菜单
            menu.forEach(v => {
                menuIdList.forEach(id => {
                    if (v._id == id) {
                        changeRole.push(v._id)
                    }

                })
            })
        }
    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 编辑角色
 * @param {String} describe 角色描述
 * @param {String} name 角色名称
 * @param {String} roleMenu_List 菜单列表
 * @param {String} id 角色id
 * @type {POST}
*/

router.post('/editRole', async (req, res, next) => {
    try {
        const { name, describe, roleMenu_List, id } = req.body
        if (submitRule({ name, describe, id })) {
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

        const obj = { name, describe, roleMenu_List }
        //找到当前角色菜单
        let menuList = await dbMenu.find({ "_id": { $in: roleMenu_List } })
        //数据处理
        obj.roleMenuName_List = menuList.map(v => v.name)
        //更新当前角色内容
        await db.findOneAndUpdate({ _id: id }, obj)
        return res.jsonp({ code: 1, message: '操作成功' })
    } catch {
        next({ message: '接口错误' })
    }
})


/** 
 * 角色删除
 * @param {String} id 角色id
 * @type {POST}
*/
router.post('/removeRole', (req, res, next) => {
    try {
        const { id } = req.body
        db.findByIdAndRemove({ _id: id }, (err, data) => {
            return res.jsonp({ code: 1, message: '操作成功' })
        })
    } catch {
        next({ message: '接口错误' })
    }
})


router.post('/setStatus', (req, res, next) => {
    try {
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
    } catch {
        next({ message: '接口错误' })
    }
})


/** 
 * 获取角色列表
 * @param {String} name 角色名称
 * @param {Number} status 状态
 * @type {POST}
 * @return {data} 
*/
router.post('/getRoleList', async (req, res, next) => {
    try {
        const { pageSize, pageNumber, name, status } = req.body
        let queryInfo = {
            $or: []
        }
        const queryMap = { name, status }
        queryInfoHandle(queryMap, regexQueryKeyList, queryInfo)
        let count = await db.count({})
        let data = await db.find(queryInfo, { __v: 0, roleMenu_List: 0 }).skip((pageNumber - 1) * 10).limit(pageSize)
        return res.jsonp({
            code: 1,
            data,
            count: queryInfo.$or ? data.length : count,
            message: '操作成功'
        })
    } catch {
        next({ message: '接口错误' })
    }

})

module.exports = router;
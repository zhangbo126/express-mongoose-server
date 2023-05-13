var express = require('express');
var router = express.Router();
let db = require('../db').menuInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule



/** 
 * 新增菜单
  * @param {String} name 菜单名称
  * @param {String} icon 菜单图标
  * @param {String} component 所属组件
  * @param {String} url  菜单路径
  * @param {String} redirectUrl 重定向 菜单路径
  * @param {String} sort 排序
  * @param {String} key 唯一标识
  * @param {String} parentId 父级ID
  * @param {Array} children  子菜单
  * @type {POST}
  * @return 
*/

router.post('/addMenu',async (req, res, next) => {
    try {
        const { name, icon, component, url, redirectUrl, sort, key, parentId, children ,menuType} = req.body
        if (submitRule({ name, component, url, key }) && [1].includes(menuType)) {
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
            name, status: 1, icon, component, url, redirectUrl, sort, key, parentId, children,menuType
        }

       let findData = await db.findOne({key})
       //判断当前菜单唯一标识是否使用
       if(findData){
         return res.jsonp({code: 0, message: '标识已被使用' })
       }else{
          db.insertMany(obj)
          return res.jsonp({code: 1, message: '操作成功' })
       }
    } catch {
        next({ message: '接口错误' })
    }
})

/**
 * 修改菜单
  * @param {String} name 菜单名称
  * @param {String} icon 菜单图标
  * @param {String} component 所属组件
  * @param {String} url  菜单路径
  * @param {String} redirectUrl 重定向 菜单路径
  * @param {String} sort 排序
  * @param {String} key 唯一标识
  * @param {String} parentId 父级ID
  * @param {String} id 菜单ID
  * @param {Array} children  子菜单
  * @type {POST}
  * @return 
*/
router.post('/editMenu',async (req, res, next) => {
    try {
        const { name, status, icon, component, url, redirectUrl, sort, key, parentId, children, id ,menuType} = req.body
        if (submitRule({ name, component, url, key }) && [1].includes(menuType)) {
            return res.jsonp({ code: 0,message: '参数不完整'})         
        }
        if (reqRules({ name, component, url, redirectUrl, sort, key, id }, 40)) {
            return res.jsonp({ code: 0, message: '异常'})          
        }
        const obj = {
            name, status:1, icon, component, url, redirectUrl,
            children: children || [],
            sort,
            key,
            parentId, id,
            menuType
        }
        //判断 菜单唯一标识 是否被占用
        let findData = await  db.findOne({key})
        if(findData && findData.id != id){
            return res.jsonp({code: 0,message: '标识已被使用'})
        }
        await db.updateOne({ _id: id },obj)
        res.jsonp({code: 1,message: '操作成功'})

    } catch {
        next({ message: '接口错误' })
    }
})


/**
 *  菜单状态启用/停用
   * @param {String} id 菜单ID
   * @param {String} status 状态
   * @type {POST}
  * @return 
*/

router.post('/setStatus', async(req, res, next) => {
    try {
        const { status, id } = req.body
        if (submitRule({ status, id })) {
            return res.jsonp({ code: 0,message: '参数不完整' })          
        }
        if (![0, 1].includes(status)) {
            return res.jsonp({ code: 0, message: '参数不正确'})       
        }
        await  db.updateOne({ _id: id }, { status })
        return res.jsonp({ code: 1, message: '操作成功'})   

    } catch {
        next({ message: '接口错误' })
    }
})


/**
 * 删除菜单
 * @param {String} id 菜单ID
 * @type {POST}
 * @return 
*/

router.post('/removeMenu', async (req, res, next) => {
    try {
        const { id } = req.body
        if (submitRule({ id })) {
            return res.jsonp({ code: 0,message: '参数不完整' })        
        }
        await  db.findByIdAndRemove({ _id: id })
        return res.jsonp({ code: 1,message: '操作成功' })   
    } catch {
        next({ message: '接口错误' })
    }
})


/**
 * 获取树形结构 菜单
 * @type {POST}
 * @return {tree} 菜单树
 */

router.post('/getMenuTree', async (req, res, next) => {
    try {
        const { pageSize, pageNumber } = req.body
        db.find({}, { __v: 0 }, (err, data) => {
            const menu = data
            console.log()
            //树型结构数据处理
            const tree = []
            listToTree(menu, tree, null)
            return res.jsonp({
                code: 1,
                data: tree,
                message: '操作成功'
            })
        }).skip(pageNumber - 1).limit(pageSize).sort({'sort':1})

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




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


/** 
 * 新增商品分类
 * @param {String} partentId 分类父级id
 * @param {String} name 分类名称
 * @param {String} logoFilePath 图片
 * @param {Number} sort 排序
 * @type {POST}
*/

router.post('/addClass', async(req, res, next) => {
    try {
        const { name, logoFilePath, sort, partentId } = req.body
        if (submitRule({ name })) {
            return res.jsonp({ code: 0,message: '参数不完整' })        
        }

        if (reqRules({ name })) {
            return res.jsonp({code: 0, message: '异常' })                     
        }
        //查找当前分类是否存在
        let findData = await  db.findOne({ name })
        if(findData){
            return res.jsonp({ code: 0, message: '分类名称已存在'})       
        }
        //如果有父级id
        if(partentId){
            let findPartent =await db.findOne({ _id: partentId })
            const obj = { name, logoFilePath, status: 1, sort, partentId: partentId || null, partentName: findPartent.name }
            //更新分类
            await db.insertMany(obj)  
            return res.jsonp({ code: 1, message: '操作成功'})         
        }
       
        //没有父级id
        const obj = { name, logoFilePath, status: 1, sort }
        await db.insertMany(obj)  
        return res.jsonp({ code: 1, message: '操作成功'}) 
    } catch {
        next({ message: '接口错误' })
    }
})



/** 
 * 编辑商品分类
 * @param {String} name 分类名称
 * @param {String} logoFilePath 图片
 * @param {Number} status 状态
 * @param {String} partentId 父级id
 * @param {Number} sort 排序
 * @param {String} _id 分类id
 * @type {POST}
*/

router.post('/editClass', async(req, res, next) => {
    try {
        const { name, logoFilePath, status, partentId, sort, _id } = req.body
        if (submitRule({ name, _id })) {
            return res.jsonp({ code: 0,message: '参数不完整' })                     
        }
        if (reqRules({ name })) {
            return res.jsonp({ code: 0,message: '异常'  })                  
        }
       
        let findData =   await db.findOne({ partentId: _id })
        //判断当前分类下是否有子分类
        if(findData && partentId) {
            return res.jsonp({ code: 0,message: '当前分类下已有子分类'  })     
        }

        let partentData = db.findOne({ _id: partentId })
        const obj = {
            name, logoFilePath, status, partentId, sort, _id, partentName: partentData.name || null
        }
        //更新当前分类内容
        await db.updateOne({ _id }, obj)
        return res.jsonp({ code: 1,message: '操作成功'  })   

    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 删除分类
 * @param {String} _id 分类id
 * @type {POST}
*/

router.post('/delClass', (req, res, next) => {
    try {
        const { _id } = req.body
        if (submitRule({ _id })) {
            return res.jsonp({ code: 0, message: '参数不完整' })     
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

/** 
 * 获取分类列表
 * @param {String} name 分类名称
 * @param {String} status 状态
 * @param {String} partentName 上级分类名称
 * @type {POST}
 * @return {data，count} 
*/

router.post('/getClassList', async (req, res, next) => {
    try {
        const { pageSize, pageNumber, name, status, partentName } = req.body
        let queryInfo = {
            $or: []
        }
        const queryMap = { name, status, partentName }
        queryInfoHandle(queryMap, regexQueryKeyList, queryInfo)
        //获取总页数
        let count =await db.count(queryInfo).count(true)
        //获取分类列表
        let findData =await db.find(queryInfo, { __v: 0 }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ 'sort': 1 })
        //处理数据
        let data = findData.map(v => {
            v.logoFilePath = replaceImgUrl(v.logoFilePath)
            return v
        })
        return res.jsonp({code: 1,data,count,message: '操作成功'})

    } catch {
        next({ message: '接口错误' })
    }
})


/** 
 * 获取父级分类
 * @type {POST}
 * @return {data} 
*/

router.post('/getPartentClass', (req, res, next) => {
    try {
        db.find({ partentId: null }, { __v: 0 }, (err, data) => {
            return res.jsonp({ code:1,data, message: '操作成功'})      
        })
    } catch {
        next({ message: '接口错误' })
    }
})


/** 
 * 小程序获取分类 层级
 * @type {POST}
 * @return {data} 
*/
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



/** 
 * 小程序根据类型获取分类列表
 *  @param {String} price 价格
 *  @param {String} categoryId 分类id
 *  @param {String} salesVolume 
 *  @type {POST}
 * @return {data} 
*/

router.post('/getClassTypeList',async (req, res, next) => {
    try {
        const { price, categoryId, salesVolume } = req.body
        
        // 找到当前分类下的子分类
         let findData =  await db.find({ partentId: categoryId })
         //分类id组
         const categoryIds = findData.map(v => v._id)  
         let goodsData = await dbGoods.find({ "categoryId": { $in: categoryIds } }).sort({ price, salesVolume })
         let data  = goodsData
         //处理数据格式
         data.forEach(v => {
            v.designSketch = v.designSketch.map(url => {
                return url = replaceImgUrl(url)
            })
        })
        return res.jsonp({code: 1 ,data, message: '操作成功' })
        
    } catch {
        next({ message: '接口错误' })
    }
})

module.exports = router;
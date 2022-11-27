var express = require('express');
var router = express.Router();
let db = require('../db').cartInfo
let dbGoodsInfo = require('../db').goodsInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let replaceImgUrl = require('../utils/imgUrl')


/** 
 * 添加购物车
 * @param {String} userId 用户id
 * @param {String} skuId 规格id
 * @param {Number} num 数量
 * @type {POST}
*/

router.post('/addCart', async(req, res, next) => {
    try {
        const { userId, skuId, num } = req.body
        if (submitRule({ userId, skuId, num })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        let goodsData = await dbGoodsInfo.findOne({ _id: skuId })
        let obj = JSON.parse(JSON.stringify(goodsData))
        obj.userId = userId
        obj.num = num
        obj.skuId = obj._id
        delete obj._id
        //更新当前用户信息
        let cartData = await db.findOneAndUpdate({ skuId, userId }, { num })
        if(cartData){
              return res.jsonp({code:1,message:'操作成功'})
        }
        await  db.insertMany(obj)
        return res.jsonp({code:1,message:'操作成功'})
    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 删除购物车
 * @param {Array} idList 购物车ids
 * @param {String} userId 用户id
 * @type {POST}
*/
router.post('/delCart', (req, res, next) => {
    try {
        const { idList, userId } = req.body
        if (submitRule({ idList })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        db.deleteMany({ _id: { $in: idList }, userId }).then(data => {
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
 * 获取购物车列表
 * @param {String} userId 用户id
 * @type {POST}
 *  @return {data} 
*/
router.post('/getCartList',async (req, res, next) => {
    try {
        const { userId } = req.body
        if (submitRule({ userId })) {
            return res.jsonp({ code: 0,message: '参数不完整' })          
        }
        let data  = await db.find({ userId })
        data.forEach(v => {
            v.designSketch = v.designSketch.map(url => {
                return url = replaceImgUrl(url)
            })
        })
        return res.jsonp({ code: 1,message: '操作成功',data })
    } catch {
        next({ message: '接口错误' })

    }
})

module.exports = router;

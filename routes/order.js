var express = require('express');
var router = express.Router();
let db = require('../db').orderInfo
let dbCart = require('../db').cartInfo
let dbGoods = require('../db').goodsInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let silly = require('silly-datetime');
let replaceImgUrl = require('../utils/imgUrl')

/** 
 * 创建订单
 * @param {String} userId 用户id
 * @param {String} skuIds 规格id
 * @type {POST}
*/

router.post('/createOrder',async (req, res, next) => {
    try {
        const { userId, skuIds } = req.body
        const ids = skuIds.map(v => v.skuId)
        if (submitRule({ userId, skuIds })) {
            return res.jsonp({code: 0, message: '参数不完整' })          
        }
        //根据规格id找到规格信息
        let findGoods = await dbGoods.find({ "_id": { $in: ids } }, { status: 0, __v: 0 })
        let orderList = JSON.parse(JSON.stringify(findGoods))
        //数据格式处理
        orderList.forEach(v => {
            v.userId = userId
            v.status = 1,
            v.num = skuIds.find(s => s.skuId == v._id).num
            v.createTime = silly.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
            delete v._id
        })
         //创建订单
        let data = await  db.insertMany(orderList)
        //删除规格id
        await dbCart.remove({ "skuId": { $in: ids }, "userId": userId })

        return res.jsonp({
            code: 1,
            message: '操作成功',
            data: data.map(v => v._id)
        })
    } catch {
        next({ message: '接口错误' })
    }
})


/** 
 * 修改订单状态
 * @param {String} orderIds 订单id
 * @param {String} id id
 * @param {Number} status  状态
 * @type {POST}
*/

router.post('/updateOrder', async (req, res, next) => {
    try {
        const { orderIds, id, status } = req.body
        if (submitRule({ status })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        if (orderIds) {
            await  db.updateMany({ "_id": { $in: orderIds } }, { status })
            return   res.jsonp({ code: 1,message: '操作成功'})

        } else {
            await  db.findByIdAndUpdate({ "_id": id }, { status })
            return   res.jsonp({ code: 1,message: '操作成功',})
        }
    } catch {
        next({ message: '接口错误' })
    }
})

/** 
 * 删除订单
 * @param {String} _id id
 * @type {POST}
*/
router.post('/delOrder', (req, res, next) => {
    try {
        const { _id } = req.body
        if (submitRule({ _id })) {
            return res.jsonp({ code: 0,message: '参数不完整'})          
        }
        db.findByIdAndRemove({ _id }, (err, data) => {
            return res.jsonp({code: 1,message: '操作成功' })   
        })
    } catch {
        next({ message: '接口错误' })
    }
})


/** 
 * 获取订单列表
 * @param {String} userId 用户id
 * @type {POST}
 * @return {data} 
*/
router.post('/getOrderList',async (req, res, next) => {
    try {
        const { pageSize, pageNumber, status, userId } = req.body
        let obj = { status,userId }     
        obj.status ? '' : delete obj.status
        let data = await db.find(obj, { __v: 0 }).skip((pageNumber - 1) * 10).limit(pageSize)
        //数据格式处理
        data.forEach(v => {
            v.designSketch = v.designSketch.map(url => {
                return url = replaceImgUrl(url)
            })
        })
           
        return res.jsonp({ code: 1,data,message: '操作成功' })

    }catch{
        next({ message: '接口错误' })    
    }
})


module.exports = router;

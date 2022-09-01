var express = require('express');
var router = express.Router();
let db = require('../db').cartInfo
let dbGoodsInfo = require('../db').goodsInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let replaceImgUrl = require('../utils/imgUrl')


//添加购物车
router.post('/addCart', (req, res, next) => {
    try {
        const { userId, skuId, num } = req.body
        if (submitRule({ userId, skuId, num })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        dbGoodsInfo.findOne({ _id: skuId }).then(data => {
            let obj = JSON.parse(JSON.stringify(data))
            obj.userId = userId
            obj.num = num
            obj.skuId = obj._id
            delete obj._id
            db.findOneAndUpdate({ skuId, userId }, { num }).then(cartData => {
                if (cartData) {
                    return res.jsonp({
                        code: 1,
                        message: '操作成功'
                    })
                }
                db.insertMany(obj).then(() => {
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


//删除购物车
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

//获取购物车列表
router.post('/getCartList', (req, res, next) => {
    try {
        const { userId } = req.body
        if (submitRule({ userId })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }
        db.find({ userId }).then(data => {
            let resData = data
            resData.forEach(v => {
                v.designSketch = v.designSketch.map(url => {
                    return url = replaceImgUrl(url)
                })
            })
            return res.jsonp({
                code: 1,
                message: '操作成功',
                data: resData
            })
        })
    } catch {
        next({ message: '接口错误' })

    }
})

module.exports = router;

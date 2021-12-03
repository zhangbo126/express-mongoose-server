var express = require('express');
var router = express.Router();
let db = require('../db').orderInfo
let dbCart = require('../db').cartInfo
let dbGoods = require('../db').goodsInfo

let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let silly = require('silly-datetime');
let replaceImgUrl = require('../utils/imgUrl')




//创建订单

router.post('/createOrder', (req, res, next) => {

    const { userId, skuIds } = req.body
    const ids = skuIds.map(v => v.skuId)
    if (submitRule({ userId, skuIds })) {
        return res.jsonp({
            code: 0,
            message: '参数不完整'
        })
    }


    dbGoods.find({ "_id": { $in: ids } }, { status: 0, __v: 0 }, (err, goodsList) => {
        let orderList = JSON.parse(JSON.stringify(goodsList))
        orderList.forEach(v => {
            v.userId = userId
            v.status = 1,
                v.num = skuIds.find(s => s.skuId == v._id).num
            v.createTime = silly.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
            delete v._id
        })

        db.insertMany(orderList, (err, data) => {

            if (!err) {
                dbCart.remove({ "skuId": { $in: ids }, "userId": userId }).then(() => {

                    return res.jsonp({
                        code: 1,
                        message: '操作成功',
                        data: data.map(v => v._id)
                    })
                })
            }
        })



    })




})


//修改订单状态
router.post('/updateOrder', (req, res, next) => {

    const { orderIds, id, status } = req.body
    if (submitRule({ status })) {
        return res.jsonp({
            code: 0,
            message: '参数不完整'
        })
    }
    if (orderIds) {
        db.updateMany({ "_id": { $in: orderIds } }, { status }, (err) => {
            if (!err) {
                return res.jsonp({
                    code: 1,
                    message: '操作成功',
                })
            }
            return res.jsonp({
                code: 0,
                message: '异常',
            })
        })

    } else {
        db.findByIdAndUpdate({ "_id": id }, { status }, (err, data) => {
            if (!err) {
                return res.jsonp({
                    code: 1,
                    message: '操作成功',
                })
            }
            return res.jsonp({
                code: 0,
                message: '异常',
            })

        })
    }




})

//删除订单
router.post('/delOrder', (req, res, next) => {

    const { _id } = req.body
    if (submitRule({ _id })) {
        return res.jsonp({
            code: 0,
            message: '参数不完整'
        })
    }

    db.findByIdAndRemove({ _id }, (err, data) => {

        if (!err) {
            return res.jsonp({
                code: 1,
                message: '操作成功',
            })
        }
        return res.jsonp({
            code: 1,
            message: '异常',
        })
    })

})


//获取订单列表

router.post('/getOrderList', (req, res, next) => {

    const { pageSize, pageNumber, status, userId } = req.body
    let obj = {
        status,
        userId
    }

    obj.status ? '' : delete obj.status

    db.find(obj, { __v: 0 }, (err, data) => {
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
    }).skip((pageNumber - 1) * 10).limit(pageSize)


})


module.exports = router;

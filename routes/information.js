let express = require('express');
let router = express.Router();
let db = require('../db').informationInfo
let silly = require('silly-datetime');
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let queryInfoHandle = require('../utils/queryInfoHandle')
// 需要添加正则验证的参数
const regexQueryKeyList = ["goodsName", "placeOrigin", "brandName", "categoryName", "goodsNo", "skuName"]


/*新增信息*/
router.post('/addInformation', (req, res, next) => {
    try {
        const { name, status, content, imageFilePath } = req.body
        if (submitRule({ name, status, content })) {
            return res.jsonp({
                code: 0,
                message: '参数不完整'
            })
        }

        const obj = { name, imageFilePath, status: 1, content, createTime: silly.format(new Date(), 'YYYY-MM-DD') }
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
    } catch {
        next({ message: '接口错误' })
    }
})

/*结束活动*/

router.post('/stopActivity', (req, res, next) => {
    try {
        const { id } = req.body
        db.findByIdAndUpdate({ _id: id }, { status: 0 }).then(data => {
            return res.jsonp({
                code: 1,
                message: '操作成功'
            })
        })
    } catch {
        next({ message: '接口错误' })
    }

})
/*删除活动*/

router.post('/delActivity', (req, res, next) => {
    try {
        const { id } = req.body
        db.findByIdAndDelete({ _id: id }).then(data => {
            return res.jsonp({
                code: 1,
                message: '操作成功'
            })
        })
    } catch {
        next({ message: '接口错误' })
    }
})

/*获取活动列表*/

router.post('/getActivityList', (req, res, next) => {
   try{
    const { pageSize, pageNumber, name, status, statusSort } = req.body
    let queryInfo = {
        $or: []
    }
    const queryMap ={ name, status }
    queryInfoHandle(queryMap,regexQueryKeyList,queryInfo)
    db.count({}, (err, count) => {
        db.find(queryInfo, { __v: 0 }, (err, data) => {
            return res.jsonp({
                code: 1,
                data,
                count: queryInfo.$or ? data.length : count,
                message: '操作成功'
            })
        }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ status: statusSort })
    })
   }catch{
      next({ message: '接口错误' })
   }
})


module.exports = router;
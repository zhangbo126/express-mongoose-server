let express = require('express');
let router = express.Router();
let db = require('../db').informationInfo
let silly = require('silly-datetime');
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule



/*新增信息*/


router.post('/addInformation', (req, res, next) => {

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


})

/*结束活动*/

router.post('/stopActivity', (req, res, next) => {
    const { id } = req.body
    db.findByIdAndUpdate({ _id: id }, { status: 0 }).then(data => {
        return res.jsonp({
            code: 1,
            message: '操作成功'
        })
    })

})
/*删除活动*/

router.post('/delActivity', (req, res, next) => {
    const { id } = req.body
    db.findByIdAndDelete({ _id: id }).then(data => {
        return res.jsonp({
            code: 1,
            message: '操作成功'
        })
    })

})

/*获取活动列表*/

router.post('/getActivityList', (req, res, next) => {

    const { pageSize, pageNumber, name, status,statusSort } = req.body
    let queryInfo = {
        $or: []
    }
    queryHandle({ name, status }, queryInfo)
    db.count({}, (err, count) => {
        db.find(queryInfo, { __v: 0 }, (err, data) => {
            return res.jsonp({
                code: 1,
                data,
                count: queryInfo.$or ? data.length : count,
                message: '操作成功'
            })
        }).skip((pageNumber - 1) * 10).limit(pageSize).sort({status:statusSort})
    })

})

//查询参数数据处理
function queryHandle(queryInfo, query) {
    for (let i in queryInfo) {
        if (queryInfo[i] != null) {
            //判断需要正则验证的 参数
            if (['name'].includes(i)) {
                const obj = {
                    [i]: { $regex: new RegExp(queryInfo[i], 'i') }
                }
                return query.$or.push(obj)
            }
            const obj = {
                [i]: queryInfo[i]
            }
            query.$or.push(obj)
        }
    }
    if (query.$or.length == 0) {
        delete query.$or
    }
}



module.exports = router;
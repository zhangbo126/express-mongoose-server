var express = require('express');
var router = express.Router();
let db = require('../db').goodsInfo
let dbSpace = require('../db').goodsSpaceInfo
let dbBrand = require('../db').brandInfoList
let dbClass = require('../db').classInfoList
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule

var uuid = require('node-uuid');


//新增商品
router.post('/addGoods', (req, res, next) => {
  const goodsId = uuid.v4().replace(/-/g, "")
  const { mixList, spaceValueList } = req.body
  const { categoryId, brandId, goodsNo, goodsName } = req.body.mixInfo

  if (submitRule({ mixList, spaceValueList, categoryId, brandId, goodsNo, goodsName })) {
    return res.jsonp({
      code: 0,
      message: '参数不完整'
    })
  }

  let brandName, categoryName
  //根据id找到对应的品牌 和分类 名称
  dbBrand.findById({ _id: brandId }).then(data => {
    brandName = data.name

  }).then(() => {
    dbClass.findById({ _id: categoryId }).then(data => {
      categoryName = data.name

    }).then(() => {
      addFun()
    })
  })


  const addFun = () => {
    let goodsList = mixList.map(v => {
      delete v.mixKey1
      delete v.mixKey2
      delete v.mixKey3
      delete v.mixKey4
      v.categoryId = categoryId
      v.brandName = brandName
      v.categoryName = categoryName
      v.brandId = brandId
      v.goodsNo = goodsNo
      v.goodsName = goodsName
      v.designSketch = v.designSketch.map(d => d.url)
      v.goodsId = goodsId
      return v
    })

    const goodsInfo = {
      goodsName,
      categoryName,
      brandName,
      categoryId,
      brandId,
      goodsNo,
      goodsId,
      spaceValueList
    }

    dbSpace.insertMany(goodsInfo, (err, data) => {
      if (err) {
        return res.jsonp({
          code: 0,
          message: '异常'
        })
      }
      db.insertMany(goodsList, (err, data) => {
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
  }

})




//编辑时获取当前商品信息

router.post('/getEditGoodsInfo', (req, res, next) => {

  const { goodsId } = req.body
  let mixList = []
  let spaceList = []
  db.find({ goodsId }).then(data => {
    mixList = data
  }).then(() => {
    dbSpace.find({ goodsId }).then(data => {
      spaceList = data
      return res.jsonp({
        code: 1,
        message: '操作成功',
        data: {
          spaceList,
          mixList,
        }
      })
    })
  })

})



//获取商品列表
router.post('/getGoodsList', (req, res, next) => {

  const { pageSize, pageNumber, goodsName, brandName, categoryName, skuName } = req.body
  let queryInfo = {
    $or: []
  }

  queryHandle({ goodsName, categoryName, brandName, skuName }, queryInfo)
  db.count({}, (err, count) => {
    db.find(queryInfo, { __v: 0 }, (err, data) => {
      return res.jsonp({
        code: 1,
        data,
        count,
        message: '操作成功'
      })
    }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ 'sort': 1 })
  })

})




//查询参数数据处理
function queryHandle(queryInfo, query) {
  for (let i in queryInfo) {
    if (queryInfo[i] != null) {
      //判断需要正则验证的 参数
      if (i == 'goodsName') {
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
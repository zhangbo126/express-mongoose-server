var express = require('express');
var router = express.Router();
let db = require('../db').goodsInfo
let dbSpace = require('../db').goodsSpaceInfo
let dbBrand = require('../db').brandInfoList
let dbClass = require('../db').classInfoList
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let replaceImgUrl = require('../utils/imgUrl')
var uuid = require('node-uuid');


//新增商品
router.post('/addGoods', (req, res, next) => {
  const goodsId = uuid.v4().replace(/-/g, "")
  const { mixList, spaceValueList } = req.body
  const { categoryId, brandId, goodsNo, goodsName, placeOrigin } = req.body.mixInfo

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
      v.status = 1
      v.brandName = brandName
      v.categoryName = categoryName
      v.brandId = brandId
      v.goodsNo = goodsNo
      v.goodsName = goodsName
      v.placeOrigin = placeOrigin
      v.designSketch = v.designSketch.map(d => d.url)
      v.goodsId = goodsId
      v.salesVolume = Math.floor(Math.random() * 100)
      return v
    })

    const goodsInfo = {
      goodsName,
      placeOrigin,
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


//编辑商品
router.post('/editGoods', (req, res, next) => {

  const { mixList, spaceValueList } = req.body
  const { categoryId, brandId, goodsNo, goodsName, goodsId, placeOrigin } = req.body.mixInfo

  if (submitRule({ mixList, spaceValueList, categoryId, brandId, goodsNo, goodsName, goodsId })) {
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
      editFun()
    })
  })


  const editFun = () => {
    let goodsList = mixList.map(v => {
      delete v.mixKey1
      delete v.mixKey2
      delete v.mixKey3
      delete v.mixKey4
      v.categoryId = categoryId
      v.status = 1
      v.brandName = brandName
      v.categoryName = categoryName
      v.brandId = brandId
      v.goodsNo = goodsNo
      v.goodsName = goodsName
      v.placeOrigin = placeOrigin
      v.designSketch = v.designSketch.map(d => d.url)
      v.goodsId = goodsId
      v.salesVolume = Math.floor(Math.random() * 100)

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
      placeOrigin,
      spaceValueList
    }



    dbSpace.updateOne({ goodsId }, goodsInfo).then(data => {

    }).then(() => {
      db.deleteMany({ goodsId }, (err, data) => {
        if (!err) {
          db.insertMany(goodsList, (errs, data) => {
            if (errs) {
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
        }
      })


    })
  }

})


//编辑时获取当前商品信息

router.post('/getEditGoodsInfo', (req, res, next) => {
  const { goodsId } = req.body
  let mixList = []
  let spaceInfo = {}
  db.find({ goodsId }).then(data => {
    mixList = data
  }).then(() => {
    dbSpace.findOne({ goodsId }).then(data => {
      spaceInfo = data
      return res.jsonp({
        code: 1,
        message: '操作成功',
        data: {
          spaceInfo,
          mixList,
        }
      })
    })
  })

})



//获取商品列表
router.post('/getGoodsList', (req, res, next) => {

  const { pageSize, pageNumber, goodsName, brandName, categoryName, skuName, goodsNo, placeOrigin, goodsType } = req.body
  let queryInfo = {
    $or: []
  }

  queryHandle({ goodsName, categoryName, brandName, skuName, goodsNo, placeOrigin, goodsType }, queryInfo)

  db.find(queryInfo, (err, count) => {
    db.find(queryInfo, { __v: 0 }, (err, data) => {
      let resData = data
      return res.jsonp({
        code: 1,
        data: resData,
        count,
        message: '操作成功'
      })
    }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ 'sort': 1 })
  }).count(true)

})





//设置商品详情
router.post('/setGoodsDetails', (req, res, next) => {
  const { id, mixDetail } = req.body
  if (submitRule({ id, mixDetail })) {
    return res.jsonp({
      code: 0,
      message: '参数不完整'
    })
  }

  db.findOneAndUpdate({ _id: id }, { mixDetail }).then(data => {
    return res.jsonp({
      code: 1,
      message: '操作成功'
    })
  })
})

//获取商品详情
router.post('/getGoodsDetails', (req, res, next) => {
  const { id } = req.body
  if (submitRule({ id })) {
    return res.jsonp({
      code: 0,
      message: '参数不完整'
    })
  }

  db.findOne({ _id: id }).then(data => {
    data.designSketch = data.designSketch.map(v => {
      
      return v = replaceImgUrl(v)
    })
    return res.jsonp({
      code: 1,
      message: '操作成功',
      data
    })
  })
})

//小程序获取商品详情信息

router.post('/getGoodsDetailsInfo', (req, res, next) => {
  const { id } = req.body
  if (submitRule({ id })) {
    return res.jsonp({
      code: 0,
      message: '参数不完整'
    })
  }

  db.findOne({ _id: id }).then(data => {

     
    return res.jsonp({
      code: 1,
      message: '操作成功',
      data
    })
  })

})


//小程序获取商品列表 类型  
router.post('/getGoodsTypeList', (req, res, next) => {
  const { goodsType, pageSize, pageNumber } = req.body
  let queryInfo = {
    $or: []
  }

  queryHandle({ goodsType }, queryInfo)

  db.count({}, (err, count) => {
    db.find(queryInfo, { __v: 0 }, (err, data) => {
        
      return res.jsonp({
        code: 1,
        data,
        message: '操作成功'
      })
    }).skip((pageNumber - 1) * 10).limit(pageSize)
  })

})







//查询参数数据处理
function queryHandle(queryInfo, query) {
  for (let i in queryInfo) {
    if (queryInfo[i] != null) {
      //判断需要正则验证的 参数
      if (["goodsName", "placeOrigin", "brandName", "categoryName", "goodsNo", "skuName"].includes(i)) {
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
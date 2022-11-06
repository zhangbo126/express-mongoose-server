var express = require('express');
var router = express.Router();
let db = require('../db').goodsInfo
let dbSpace = require('../db').goodsSpaceInfo
let dbBrand = require('../db').brandInfoList
let dbClass = require('../db').classInfoList
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule
let replaceImgUrl = require('../utils/imgUrl')
let queryInfoHandle = require('../utils/queryInfoHandle')
var uuid = require('node-uuid');
//需要添加正则验证的参数
const regexQueryKeyList = ["goodsName", "placeOrigin", "brandName", "categoryName", "goodsNo", "skuName"]

/** 
 * 新增商品
 * @param {Array} mixList 规格项列表
 * @param {Array} spaceValueList 规格值列表
 * @param {String} categoryId 商品分类
 * @param {String} brandId 商品品牌
 * @param {String} goodsNo 商品编号
 * @param {String} goodsName 商品名称
 * @param {String} placeOrigin 价格
 * @type {POST}
 * @return {data} 
*/

router.post('/addGoods', async (req, res, next) => {

  try {
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
    let findBrand = await dbBrand.findById({ _id: brandId })
    brandName = findBrand.name
    let findClass = await dbClass.findById({ _id: categoryId })
    categoryName = findClass.name
    //组装数据
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

    //更新商品信息
    await dbSpace.insertMany(goodsInfo)
    //更新商品规格列表
    await db.insertMany(goodsList)
    return res.jsonp({ code: 1, message: '操作成功' })
  } catch {
    next({ message: '接口错误' })
  }
})

/** 
 * 编辑
 * @param {Array} mixList 规格项列表
 * @param {Array} spaceValueList 规格值列表
 * @param {String} categoryId 商品分类
 * @param {String} brandId 商品品牌
 * @param {String} goodsNo 商品编号
 * @param {String} goodsName 商品名称
 * @param {String} placeOrigin 价格
 * @param {String} goodsId 商品ID
 * @type {POST}
 * @return {data} 
*/


router.post('/editGoods', async (req, res, next) => {
  try {
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
    let findBrand = dbBrand.findById({ _id: brandId })
    brandName = findBrand.name
    let findClass = await dbClass.findById({ _id: categoryId })
    categoryName = findClass.name
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

    //更新商品信息
    await dbSpace.updateOne({goodsId},goodsInfo)  
    //删除 之前的商品规格
    await db.deleteMany({ goodsId })
    //更新商品规格列表
    await db.insertMany(goodsList)
    return res.jsonp({ code: 1, message: '操作成功' })

  } catch (err) {
    console.log(err)
    next({ message: '接口错误' })
  }
})

/** 
 * 编辑时获取当前商品信息
 * @param {String} goodsId 价格
 * @type {POST}
 * @return {spaceInfo,mixList} 
*/
//编辑时获取当前商品信息
router.post('/getEditGoodsInfo', async (req, res, next) => {
  try {
    const { goodsId } = req.body
    let mixList = []
    let spaceInfo = {}
    //找到商品信息
    let findData = await db.find({ goodsId })
    mixList = findData
    //找到商品规格信息
    let findSpaceData = await dbSpace.findOne({ goodsId })
    spaceInfo = findSpaceData
    let data = { spaceInfo, mixList }
    res.jsonp({ code: 1, message: '操作成功', data })
  } catch {
    next({ message: '接口错误' })
  }
})


/** 
 * 获取商品列表
 * @param {String} goodsName 商品名称
 * @param {String} brandName 品牌名称
 * @param {String} categoryName 分类名称
 * @param {String} skuName 规格名称
 * @param {String} goodsNo 商品编号
 * @param {Number} placeOrigin 价格
 * @param {String} goodsType 商品分类
 * @type {POST}
 * @return {data} 
*/
router.post('/getGoodsList', async (req, res, next) => {
  try {
    const { pageSize, pageNumber, goodsName, brandName, categoryName, skuName, goodsNo, placeOrigin, goodsType } = req.body
    let queryInfo = {
      $or: []
    }
    const queryMap = { goodsName, categoryName, brandName, skuName, goodsNo, placeOrigin, goodsType }
    queryInfoHandle(queryMap, regexQueryKeyList, queryInfo)
    //获取总页数
    let count = await db.find(queryInfo).count(true)
    //查询商品数据
    let findData = await db.find(queryInfo, { __v: 0 }).skip((pageNumber - 1) * 10).limit(pageSize).sort({ 'sort': 1 })
    return res.jsonp({
      code: 1,
      data: findData,
      count,
      message: '操作成功'
    })
  } catch {
    next({ message: '接口错误' })
  }
})

/** 
 * 设置商品详情
 * @param {String} id 规格id
 * @param {String} mixDetail 规格详情
 * @type {POST}
 * @return {data} 
*/

router.post('/setGoodsDetails', async (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})

/** 
 * 获取商品详情
 * @param {String} id 规格id
 * @type {POST}
 * @return {data} 
*/
router.post('/getGoodsDetails', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})

/** 
 * 小程序获取商品详情信息
 * @param {String} id 规格id
 * @type {POST}
 * @return {data} 
*/

router.post('/getGoodsDetailsInfo', (req, res, next) => {
  try {
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
  } catch {
    next({ message: '接口错误' })
  }
})

/** 
 * 小程序获取商品列表 类型 
 * @param {Number} goodsType 商品分类
 * @type {POST}
 * @return {data} 
*/
router.post('/getGoodsTypeList', async (req, res, next) => {
  try {
    const { goodsType, pageSize, pageNumber } = req.body
    let queryInfo = {
      $or: []
    }
    const queryMap = { goodsType }
    queryInfoHandle(queryMap, regexQueryKeyList, queryInfo)
    let count = await db.count({})
    let findData = await db.find(queryInfo, { __v: 0 }).skip((pageNumber - 1) * 10).limit(pageSize)
    return res.jsonp({
      code: 1,
      data: findData,
      message: '操作成功'
    })
  } catch {
    next({ message: '接口错误' })
  }
})




module.exports = router;
var express = require('express');
var router = express.Router();
let db = require('../db').goodsInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule




router.post('/addGoods', (req, res, next) => {
    
    

})


module.exports = router;
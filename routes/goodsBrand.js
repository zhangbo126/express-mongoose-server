var express = require('express');
var router = express.Router();
let db = require('../db').goodsClassInfo
let reqRules = require('../utils/reqDataRule').reqMultipleRule
let submitRule = require('../utils/reqDataRule').reqSubmitRule



module.exports = router;
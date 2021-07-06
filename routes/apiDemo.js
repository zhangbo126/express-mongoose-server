var express = require('express');
var router = express.Router();
let db = require('../db').userInfo
const crypto = require("crypto")

const jwt = require('jsonwebtoken');



let express = require('express');
let router = express.Router();
let silly = require('silly-datetime');
let multer = require('multer');
let getIpUrl = require('../utils/getIpAddress')
var ueditor = require("ueditor");
var path = require('path');
var app = express();
let destination = '/upload/' + silly.format(new Date(), 'YYYY/MM/DD');  //保存图片的路径
let storage = multer.diskStorage({
    //这里destination是一个字符串
    destination: '.' + destination,
    filename: function (req, file, cb) {
        //自定义设置文件的名字
        let timestamp = silly.format(new Date(), 'YYYYMMDDHHmm') + '_' + Math.random() * 10000
        let filenameArr = file.originalname.split('.');
        let mimetypename = filenameArr[filenameArr.length - 1];
        filename = timestamp + '.' + mimetypename;
        cb(null, filename)
    }

});

let upload = multer({ storage })

//单个上传
router.post('/image', upload.single("file"), (req, res, next) => {
    const path = req.file.path.replace(/\\/g, '/')
    return res.jsonp({
        code: 1,
        message: '操作成功',
        data: {
            path: `http://localhost:99/` + req.file.path.replace(/\\/g, '/')
        }
    })
})




//单个上传 ueditor
router.get('/imageEuditor', (req, res, next) => {
    return res.jsonp({
        code: 1,
        message: '操作成功',
    })
})


//批量上传接口
router.post('/batchimage', upload.array('file', 20), (req, res, next) => {

    try {
        const data = req.files.map(v => {
            let file = {
                path: `http://localhost:99/` + v.path.replace(/\\/g, '/')
            }
            return file
        })

        return res.jsonp({
            code: 1,
            message: '操作成功',
            data
        })

    } catch {
        next({ message: '接口错误' })

    }
})

module.exports = router;
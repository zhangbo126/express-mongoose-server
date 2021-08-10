let express = require('express');
let router = express.Router();
let silly = require('silly-datetime');
let multer = require('multer');
let getIpUrl= require('../utils/getIpAddress')

let destination = '/upload/'+silly.format(new Date(),'YYYY/MM/DD');  //保存图片的路径

let timestamp = '';

let storage = multer.diskStorage({
    //这里destination是一个字符串

    destination: '.' + destination,
    filename: function (req, file, cb) {
        //自定义设置文件的名字
        timestamp = silly.format(new Date(), 'YYYYMMDDHHmm')

        let filenameArr = file.originalname.split('.');

        let mimetypename = filenameArr[filenameArr.length - 1];

        filename = timestamp + '.' + mimetypename;

        cb(null, filename)

    }

});

let upload = multer({ storage })

router.post('/image', upload.single("file"), (req, res, next) => {

    const path =`http://${getIpUrl()}:99/` + req.file.path.replace(/\\/g, '/')
    return res.jsonp({
        code: 1,
        message: '操作成功',
        data: {
            path
        }
    })

})

module.exports = router;
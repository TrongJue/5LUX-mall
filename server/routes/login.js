var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var SMSClient = require('@alicloud/sms-sdk');
var _ = require('lodash');

var smsClient = new SMSClient({
    accessKeyId:'LTAIlszbnIVVH3rl',
    secretAccessKey:'gwW2hkEnlMfCnPtXb8PjTcfZY3KawJ'
});

var DB_STR = 'mongodb://localhost:27017/fivelux';
var router = express.Router();

var usercode = [
    // {phone:'',code:''}
];
//验证手机号和验证码是否有效并且要返回结果
function _validatePhoneCode(phone,code){
    var _usercode = usercode.slice(0);
    var length = _usercode.length;
    while(length--){
        if(_usercode[length].phone === phone){
            if(_usercode[length].code === code) return '1';
            else return '验证码错误';
        }
    }//end while
    return '验证码过期';
}
function _sendCode(phone,callback){
    var code = Math.floor(Math.random()*1000000);
    smsClient.sendSMS({
        PhoneNumbers:phone,
        SignName:'校科健身',
        TemplateCode:'SMS_135800496',
        TemplateParam:'{"code":"'+code+'"}'
    }).then(function(res){
        if(res.Code === 'OK') {
            callback('1');
            //把刚发送的验证码放到usercode中
            usercode.push({phone:phone, code:code.toString()});
            setTimeout(function(){
                _.remove(usercode,function(item){
                    return item.phone === phone;
                });
            },30000);
        }
        else callback('验证码发送失败');
    },function(err){console.log(err);
        callback('验证码发送失败');
    });
}

/* GET users listing. */
router.post('/getcode', function(req, res, next) {
    var phone = req.body.phone, 
        callback = function(result){ res.send(result); }
    _sendCode(phone,callback);
});
//注册
router.post('/register', function(req, res, next) {
    var phone = req.body.phone,
        code =  req.body.code,
        pwd =  req.body.pwd,
        callback = function(result){ res.send(result); }
    //根据登录类型进行登录验证
    var result = _validatePhoneCode(phone,code);
        //   ~~
    if(result !== '1') {callback(result);return;}
    //命令数据执行注册操作
    var evalStr = 'register("' + phone + '","' + pwd + '")';
    console.log(evalStr);
    MongoClient.connect(DB_STR,function(err,db){
         //打开连接
        if(err){callback('数据库连接失败');return;}
        db.eval(evalStr, function(err,message){
            if(err) result = '数据库操作失败';
            else result = message;
            console.log(result);
            db.close();     //关闭数据库连接
            callback(result);  //返回相应信息
        });
    });//end connect function
});

router.post('/message', function(req, res, next) {
    var phone = req.body.phone,
        code =  req.body.code,
        callback = function(result){ res.send(result); }
        // console.log(usercode);
        // console.log(phone+':'+code)
    //根据登录类型进行登录验证
    var result = _validatePhoneCode(phone,code);
    callback(result);    //~~if注册
    
});

router.post('/password', function(req, res, next) {
    var count = req.body.count,
        pwd =  req.body.pwd,
        callback = function(result){ res.send(result) };
     MongoClient.connect(DB_STR,function(err,db){
        //打开连接
        if(err){res.send('数据库连接失败');console.log(err);return;}
        db.collection('col_user')
        .find({$or:[{name:count},{phone:count}]})
        .toArray(function(err,arr){
            var result = '';
            if(err)
                result = '数据库操作失败';
            else if(arr.length < 1)
                result = '账号不存在';
            else if(arr[0].pwd === pwd)
                result = '1';
            else
                result = '密码错误';
            db.close();     //关闭数据库连接
            callback(result);  //返回相应信息
        });
    });//end connect function
})

module.exports = router;

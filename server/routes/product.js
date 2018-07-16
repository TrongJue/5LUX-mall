/* 
* @Author: Trong Jue
* @Date:   2018-06-20 16:47:27
* @Last Modified by:   Trong Jue
* @Last Modified time: 2018-07-02 15:40:27
*/

'use strict';
var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var DB_STR = 'mongodb://localhost:27017/fivelux';
var router = express.Router();

router.post('/all', function(req, res, next) {
    var callback = function(result){ res.send(result) };
     MongoClient.connect(DB_STR,function(err,db){
        //打开连接
        if(err){res.send('数据库连接失败');console.log(err);return;}
        db.collection('col_pro')
        .find({})
        .toArray(function(err,arr){
            var result = '';
            if(err)
                result = '数据库操作失败';
            else if(arr.length < 1)
                result = '数据获取失败';
            else
                // console.log(arr);
                result = arr;
            db.close();     //关闭数据库连接
            callback(result);  //返回相应信息
        });
    });//end connect function
})
router.post('/item', function(req, res, next) {
    var proId = req.body.proId;
    var callback = function(result){ res.send(result) };
     MongoClient.connect(DB_STR,function(err,db){
        //打开连接
        if(err){res.send('数据库连接失败');console.log(err);return;}
        db.collection('col_pro')
        .find({"_id":proId},{})
        .toArray(function(err,arr){
            var result = '';
            if(err)
                result = '数据库操作失败';
            else if(arr.length < 1)
                result = '数据获取失败';
            else
                // console.log(arr);
                result = arr;
            db.close();     //关闭数据库连接
            callback(result);  //返回相应信息
        });
    });//end connect function
})

module.exports = router;
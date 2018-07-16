/* 
* @Author: Trong Jue
* @Date:   2018-07-02 11:53:26
* @Last Modified by:   Trong Jue
* @Last Modified time: 2018-07-02 17:12:02
*/

'use strict';
var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var DB_STR = 'mongodb://localhost:27017/fivelux';
var router = express.Router();

router.post('/', function(req, res, next) {
    var callback = function(result){ res.send(result) };
     MongoClient.connect(DB_STR,function(err,db){
        //打开连接
        if(err){res.send('数据库连接失败');console.log(err);return;}
        db.collection('col_cart')
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

router.post('/pro', function(req, res, next) {
    // var count = req.body.count;
    var count = '15764225518';
    var callback = function(result){ res.send(result) };
     MongoClient.connect(DB_STR,function(err,db){
        //打开连接
        if(err){res.send('数据库连接失败');console.log(err);return;}
        db.collection('col_user')
        .aggregate([
            {$match:{$or:[{phone:count},{name:count}]}},
            {$project:{_id:1}},
            {$lookup:{
                localField:'_id',
                from:'col_cart',
                foreignField:'uid',
                as:'cartinfo'
                }},
             {$project:{_id:0}},
             {$unwind:'$cartinfo'},
             {$unwind:'$cartinfo.detail'},
             {$lookup:{
                localField:'cartinfo.detail.pid',
                from:'col_pro',
                foreignField:'_id',
                as:'proinfo'
                }},
        ])
        .toArray(function(err,arr){
            var result = '';
            if(err)
                result = '数据库操作失败';
            else if(arr.length < 1){
                result = '数据获取失败';
            }
            else{
                console.log(arr);
                result = arr
            }
            db.close();     //关闭数据库连接
            callback(result);  //返回相应信息
        });
    });//end connect function
})

module.exports = router;
db.system.js.save({_id:'register',value:function(phone,pwd){

    var count = db.col_user.count({phone:phone})

    if(count) return '用户已存在';

       db.col_user.insert({

           phone:phone,

           name:phone,

           pwd:pwd

    })

    return '1';

}})








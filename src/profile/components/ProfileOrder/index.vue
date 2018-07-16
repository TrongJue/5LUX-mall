<template>
    <div id="app">
        <router-link to="/MyOrder">
            <a class="title"><span>我的订单</span><span>查看全部 <a>></a></span></a>
        <ul class="kinds">
            <li><a><i class="iconfont icon-daifukuan"></i><p>待付款</p></a></li>
            <li><a><i class="iconfont icon-daishouhuo"></i><p>待收货</p></a></li>
            <li><a><i class="iconfont icon-daipingjia"></i><p>待评价</p></a></li>
            <li><a><i class="iconfont icon-shouhoufuwu"></i><p>我的售后</p></a></li>
        </ul>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
	import '../../../common/fonts/iconfont.css'
	export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        background-color :white
        width: 100vw
        height:108px
        margin-bottom :10px
        .title
            margin-left:20px
            padding-right:20px
            display:block
            height:44px
            border-bottom:1px solid #ddd
            span:nth-child(1)
                line-height:44px
                float:left
            span:nth-child(2)
                line-height:44px
                float:right
                a
                    color:#777
        .kinds
            display:block
            height:64px
            li
                padding-top:10px
                text-align:center
                width:20%
                display: inline-block
                a
                    font-size:12px
                    color:#777
                    i
                        font-size:20px
                        padding-bottom:3px
                        display: inline-block
</style>
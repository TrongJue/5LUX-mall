<template>
    <div id="app">
        <a class="title"><span>我的资产</span></a>
        <ul class="kinds">
            <li><a><i class="iconfont icon-jifen"></i><p>积分</p></a></li>
            <li><a><i class="iconfont icon-youhuiquan"></i><p>优惠券</p></a></li>
            <li><a><i class="iconfont icon-yueguanli"></i><p>余额</p></a></li>
            <li><a><i class="iconfont icon-qiaquan"></i><p>礼品卡</p></a></li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
	import '../../../common/fonts/iconfont.css'
	export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        background-color :white
        margin-bottom:10px
        width: 100vw
        height:108px
        .title
            margin-left:20px
            padding-right:20px
            display:block
            height:44px
            border-bottom:1px solid #ddd
            span
                line-height:44px
                float:left
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
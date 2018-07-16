<template>
    <div class="footer">
        <div class="line">
            <span>使用合作账号登录</span>
        </div>
        <div class="icon">
            <a href=""><i class="iconfont icon-qq"></i><span>QQ</span></a>
            <a href=""><i class="iconfont icon-weixin"></i><span>微信</span></a>
            <a href=""><i class="iconfont icon-weibo"></i><span>新浪微博</span></a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	import '../../../common/fonts/iconfont.css';
	export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .footer
        position:fixed
        bottom:50px
        width: 80vw
        margin-left:10vw
        text-align:center
        .line
            border-bottom:1px solid #bbb
            height:20px
            span
                display:inline-block
                transform:translateY(6px)
                background-color:white
                padding:5px 10px
        .icon
            margin-top:50px
            a
                display:inline-block
                width:26vw
                text-align:center
                font-size:12px
                color:#888
                .iconfont
                    display:block
                    font-size:40px
                    margin-bottom:20px
</style>
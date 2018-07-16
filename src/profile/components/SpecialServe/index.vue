<template>
    <div id="app">
        <a class="title"><span>特色服务</span></a>
        <ul class="kinds">
            <li><span class='hot'>Hot</span><a><i class="iconfont icon-pintuan"></i><p>我的拼团</p></a></li>
            <li><a><i class="iconfont icon-icon-test"></i><p>时尚管家</p></a></li>
            <li><a><i class="iconfont icon-bookmark-1"></i><p>保养服务</p></a></li>
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
                position relative
                .hot
                    position: absolute
                    top: 5px
                    right:10px
                    width: 25px
                    height: 16px
                    font-size:12px
                    background-color:red
                    color:white
                    border-radius :50%
                    display: inline-block
                a
                    font-size:12px
                    color:#777
                    i
                        font-size:20px
                        padding-bottom:3px
                        display: inline-block
</style>
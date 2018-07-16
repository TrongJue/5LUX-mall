<template>
    <div id="app">
        <div class="footer">
            <span><i class="iconfont icon-kefu"></i>客服</span>
            <span>
                <router-link to="/ShopCart">
                    <i class="iconfont icon-gouwu"></i>购物袋
                </router-link>
            </span>
            <span>
                <router-link to="/CartDialog">加入购物车</router-link>
            </span>
            <span>
                <router-link to="/CartDialog">立即购买</router-link>
            </span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	import '../../../common/fonts/iconfont.css';
	export default {
		props:['dialogShow'],
        methods:{
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        background-color:white
        position:fixed
        bottom:0px
        width: 100vw
        height: 60px
        text-align:center
        box-sizing:border-box
        .footer
            height:100%
            font-size:0px
            display:inline-block
            vertical-align middle
            span
                vertical-align middle
                height:100%
                display:inline-block
                i
                    margin-top:8px
                    font-size:27px
                    display:block
            span:nth-child(1),span:nth-child(2)
                vertical-align middle
                font-size:12px
                width:17vw
                border-top:1px solid #e5e5e5
                border-left:1px solid #e5e5e5
                margin-left:-1px
            span:nth-child(3)
                line-height:60px
                vertical-align middle
                font-size:18px
                width:33vw
                background-color:#cd9e7c
                & *
                    color:white
            span:nth-child(4)
                line-height:60px
                vertical-align middle
                font-size:18px
                color:white
                background-color:#ad9e7c
                width:33vw
</style>
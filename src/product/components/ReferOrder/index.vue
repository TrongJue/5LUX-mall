<template>
    <div id="app">
        <LuxHeader>
            <a href="" slot="left" class="back">&lt;</a>
            <span slot="center">订单结算</span>
        </LuxHeader>
        <div class="remark"><span>!</span> 温馨提示:订单中含海外购商品暂不支持发票</div>
    
        <div class="address">
            <i class="iconfont icon-dingwei"></i>
            <div>
                <span>收件人：朱大壮 </span>
                <span>15764225518</span>
                <p>山东 青岛 李沧区 维客超市东</p>
            </div>
            <a>></a>
        </div>
        <div class="linebg"></div>
        <div class="pro">
            <div class="pro-item" v-for="(i,index) in cart" :key="index">
                <p>
                    <span v-text="i.proinfo[0].shop"></span>
                </p>
                <div class="pro-content">
                    <img class="img" :src="i.proinfo[0].proImg[0]" alt="">
                    <span>></span>
                </div>
            </div>
            <div class="send">
                <span>配送方式</span>
                <span class="sendr"><span>普通快递 随时</span> ></span>
            </div>
            <div class="prices">共计<span>2</span>件商品，合计：<span v-text="'￥' + cart[0].cartinfo.total"></span></div>
        </div>
        <div class="fp">
            <div>
                <span>发票</span>
                <span>海外购物品暂不支持发票</span>
            </div>
        </div>
        <div class="xjq">
            <div>
                <span>现金券</span>
                <span>不可用 <span>></span></span>
            </div>
        </div>
        <div class="liuyan">
            <input type="text" placeholder="选填：给商家留言（45字以内）">
        </div>
        <div class="footer">
            <span class="check">
                <span class="check-box"><img :src="imgs[0]" alt=""></span>
                全选
            </span>
            <span class="total">
                <span>合计<span v-text="'￥' + cart[0].cartinfo.total"></span></span><br>
                <span>同意《七天无理由退换货规则》</span>
            </span>
            <span class="buy">
                <router-link to="/ToPay">提交订单</router-link>
            </span>
        </div>
    </div>
    
</template>
<script type="text/ecmascript-6">
    import '../../../common/fonts/iconfont.css'
	import LuxHeader from '../../../components/LuxHeader';
	export default {
		data(){
			return {
				imgs:[
					require('./yes.png'),
					require('./peraddress.png'),
				]
			}
		},
		components:{
			LuxHeader
		},
		methods:{
		
		},
		computed:{
//			cartpro(){return this.$store.state.cart.goods},
			cart(){return this.$store.state.cart.data}
		},
		created(){
			this.$store.dispatch('cart/getCartList');
			this.$store.dispatch('cart/getCartPro');
		}
		
	};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        width: 100vw
        min-height:150vh
        position:fixed
        top: 0
        left:0
        z-index:110
        background-color:#eee
        .remark
            line-height: 36px
            font-size:12px
            margin-top :35px
            padding-left:20px
            text-align :left
            height:36px
            width: 100vw
            background-color :#fff6e6
            color:#ff8c00
            span
                font-size:13px
                line-height:15px
                text-align :center
                vertical-align :middle
                display :inline-block
                border-radius :50%
                color:white
                background-color :#ff8c00
                height:13px
                width:13px
        .pro
            padding-left:20px
            /*margin-right:20px*/
            font-size:13px
            margin-top:10px
            background-color:white
            .pro-item
                padding-right:20px
                border-top:1px solid #ddd
                margin-top:5px
                position:relative
                p
                    padding:15px 20px
                    border-bottom:1px solid #ddd
                    span
                        display:inline-block
                .pro-content
                    padding-left:40px
                    height:90px
                    display:block
                    .img
                        vertical-align :middle
                        display:inline-block
                        height:80px
                        width:63px
                    span
                        font-size: 20px
                        color:#ccc
                        line-height :100px
                        vertical-align :middle
                        display:inline-block
                        float:right
            .send
                line-height :44px
                padding-right:20px
                height:44px
                border-top:1px solid #ddd
                border-bottom:1px solid #ddd
                .sendr
                    font-size:20px
                    color:#ccc
                    float:right
                    span
                        font-size:12px
            .prices
                line-height :44px
                text-align:left
                padding-right:20px
                height:44px
                span
                    display: inline-block
                    color:#9b885f
        .fp
            width: 100vw
            height:44px
            background-color #eee
            padding-top:10px
            div
                line-height :44px
                height:44px
                background-color:white
                padding:0 20px
                span:nth-child(1)
                    display: inline-block
                span:nth-child(2)
                    float:right
                    color:#ccc
                    display: inline-block
        .xjq
            width: 100vw
            height:44px
            background-color #eee
            padding-top:10px
            div
                line-height :44px
                height:44px
                background-color:white
                padding:0 20px
                span:nth-child(1)
                    display: inline-block
                span:nth-child(2)
                    float:right
                    color:#ccc
                    display: inline-block
                    span
                        font-size:20px
        .liuyan
            width: 100vw
            height:44px
            background-color #eee
            padding-bottom:10px
            padding-top:10px
            input
                width:100vw
                height:44px
                outline :none
                border:none
                text-indent:2rem
                background-color:white
                
        .footer
            background-color:white
            position:fixed
            bottom: 0px
            left:0
            height:60px
            width: 100vw
            box-sizing:border-box
            .check
                padding-left:20px
                display:inline-block
                width: 20vw
                height:100%
                .check-box
                    vertical-align:middle
                    border-radius:50%
                    height:22px
                    width:22px
                    display:inline-block
                    img
                        vertical-align:middle
                        display:inline-block
                        border-radius:50%
                        height:22px
                        width:22px
            .total
                padding-top:7px
                vertical-align:middle
                display:inline-block
                width:45vw
                height:100%
                text-align :right
                span:nth-child(1)
                    vertical-align:middle
                    display:inline-block
                    span
                        font-weight:bolder
                        color:#ad9e7c
                span:nth-child(3)
                    vertical-align:middle
                    font-size:12px
                    display:inline-block
                    span
                        font-weight:bolder
                        color:#ad9e7c
            .buy
                display:inline-block
                width:25vw
                height:100%
                color:white
                font-size:16px
                background-color:#ad9e7c
                text-align :center
                line-height:60px
                float:right
            .buy>*
                color:white

        .address
            background-color:white
            font-size:13px
            padding:30px 20px
            width:100vw
            display :flex
            align-items :center
            i
                font-size:20px
                color:#9b885f
                width:30px
            div
                flex:1
                p
                    margin-top 12px
            a
                font-size:20px
                color:#ccc
                padding-right:20px
                display :inline-block
                width:30px
        .linebg
            background :url("./peraddress.png")
            width: 100 vw
            height:4px
</style>
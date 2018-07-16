<template>
    <div id="app">
        <LuxHeader>
            <a href="" slot="left" class="back">&lt;</a>
            <span slot="center">购物袋（2）</span>
            <a href="" slot="right" class="">编辑</a>
        </LuxHeader>
        <div class="pro">
            <div class="pro-item" v-for="(i,index) in cart" :key="index">
                <p>
                    <span v-text="i.proinfo[0].shop"></span>
                    <span>编辑</span>
                </p>
                <div class="pro-content">
                    <span class="check-box"><img :src="imgs[0]" alt=""></span>
                    <span class="imgf"><img class="img" :src="i.proinfo[0].proImg[0]" alt=""></span>
                    <span class="contents">
                        <span v-text="i.proinfo[0].extension"></span><br>
                        <span v-text="i.proinfo[0].englishName"></span><br>
                        <span v-text="'颜色' + i.cartinfo.detail.color + '-尺寸' + i.cartinfo.detail.size"></span><br>
                        <span v-text="'￥' + i.proinfo[0].price"></span>
                    </span>
                </div>
                <span class="number">
                    <span class="num-left">-</span>
                    <span  class="num-center" v-text="i.cartinfo.detail.number"></span>
                    <span class="num-right">+</span>
                </span>
            </div>
        </div>
        
        <div class="footer">
            <span class="check">
                <span class="check-box"><img :src="imgs[0]" alt=""></span>
                全选
            </span>
            <span class="total">
                <span>合计(不含税):<span v-text="'￥' + cart[0].cartinfo.total"></span></span><br>
                <span>共计<span v-text="totals()"></span>件商品</span>
            </span>
            <span class="buy">
                <router-link to="/ReferOrder">结算</router-link>
                (<span>2</span>)
            </span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import LuxHeader from '../LuxHeader';
	export default {
		data(){
			return {
				chackIndex:1,
				imgs:[
					require('./yes.png')
                ]
            }
        },
		components:{
			LuxHeader
        },
        methods:{
			add(){
				this.$refs.nums.innerHTML='11';
            },
			totals(){
				for(var i=0;i<this.$store.state.cart.data.length;i++){
					var total = 0;
                    total += this.$store.state.cart.data[i].cartinfo.detail.number;
//					console.log(i);
                    return total;
					
                }
            }
        },
        mounted(){
			
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
        min-height:100vh
        position:fixed
        top: 0
        left:0
        z-index:110
        background-color:#f2f2f2
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
                    
        .pro
            font-size:13px
            margin-top:40px
            background-color:white
            .pro-item
                border-top:1px solid #ddd
                margin-top:5px
                position:relative
                p
                    padding:15px 20px
                    border-bottom:1px solid #ddd
                    span:nth-child(1)
                        display:inline-block
                    span:nth-child(2)
                        display:inline-block
                        float:right
                .pro-content
                    padding:10px 20px 0 20px
                    .check-box
                        vertical-align:middle
                        display:inline-block
                        height:22px
                        width:22px
                        border-radius:50%
                        img
                            display:inline-block
                            height:22px
                            width:22px
                            border-radius:50%
                    .imgf
                        vertical-align:middle
                        display:inline-block
                        text-align:center
                        height:90px
                        width:90px
                        .img
                            display:inline-block
                            height:90px
                            width:71px
                    .contents
                        
                        vertical-align:middle
                        display:inline-block
                        span:nth-child(1)
                            display:inline-block
                        span:nth-child(3)
                            display:inline-block
                        span:nth-child(5)
                            color:#999
                            display:inline-block
                        span:nth-child(7)
                            margin-top:10px
                            color:peru
                            display:inline-block
                .number
                    display:inline-block
                    height:24px
                    text-align:center
                    font-size:0
                    position:absolute
                    bottom: 10px
                    right:10px
                    .num-left
                        font-size:13px
                        display:inline-block
                        border:1px solid #ddd
                        width:24px
                        height:100%
                        line-height:24px
                    .num-center
                        font-size:13px
                        display:inline-block
                        border:1px solid #ddd
                        width:42px
                        height:100%
                        line-height:24px
                    .num-right
                        font-size:13px
                        display:inline-block
                        border:1px solid #ddd
                        height:100%
                        line-height:24px
                        width:24px
</style>
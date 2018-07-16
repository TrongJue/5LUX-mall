<template>
    <div id="app">
        <LuxHeader>
            <a href="" slot="left" class="back">&lt;</a>
            <span slot="center">我的订单</span>
        </LuxHeader>
        <ul class="tab-title">
            <li @click='curIndex=1' :class='{active:curIndex==1}'>待付款</li>
            <li @click='curIndex=2' :class='{active:curIndex==2}'>待收货</li>
            <li @click='curIndex=3' :class='{active:curIndex==3}'>全部订单</li>
        </ul>
        <div class="tab-content">
            <div class="navs" v-show='curIndex==1'>
                <div class="ordernum">订单号：2011531464418 <span>待付款</span></div>
                <div class="orderpro">
                    <img :src="state[0].proImg[0]" alt="">
                    <div>
                        <p v-text="state[0].englishName"></p>
                        <p v-text="state[0].extension"></p>
                        <p v-text="state[0].chineseName"></p>
                    </div>
                    <span v-text="'￥' + state[0].price"></span>
                </div>
                <div class="orderpro">
                    <img :src="state[1].proImg[1]" alt="">
                    <div>
                        <p v-text="state[1].englishName"></p>
                        <p v-text="state[1].extension"></p>
                        <p v-text="state[1].chineseName"></p>
                    </div>
                    <span v-text="'￥' + state[1].price"></span>
                </div>
                <div class="prices">
                    本单共<span>2</span>件商品 实付：<span v-text="parseInt(state[0].price) + parseInt(state[1].price)"></span>
                </div>
                <div class="button">
                    <span>取消订单</span>
                    <span @click="topay">立即支付</span>
                </div>
            </div>
            <div class="navs" v-show='curIndex==2'>
                <div class="ordernum">订单号：2011531464420 <span>待收获</span></div>
                <div class="orderpro">
                    <img :src="state[4].proImg[0]" alt="">
                    <div>
                        <p v-text="state[4].englishName"></p>
                        <p v-text="state[4].extension"></p>
                        <p v-text="state[4].chineseName"></p>
                    </div>
                    <span v-text="'￥' + state[4].price"></span>
                </div>
                <div class="orderpro">
                    <img :src="state[5].proImg[0]" alt="">
                    <div>
                        <p v-text="state[5].englishName"></p>
                        <p v-text="state[5].extension"></p>
                        <p v-text="state[5].chineseName"></p>
                    </div>
                    <span v-text="'￥' + state[5].price"></span>
                </div>
                <div class="prices">
                    本单共<span>2</span>件商品 实付：<span v-text="parseInt(state[4].price) + parseInt(state[5].price)"></span>
                </div>
                <div class="button">
                    <span>订单信息</span>
                    <span>查看物流</span>
                </div>
            </div>
            <div class="navs" v-show='curIndex==3'>
                <div class="ordernum">订单号：2011531464418 <span>待付款</span></div>
                <div class="orderpro">
                    <img :src="state[0].proImg[0]" alt="">
                    <div>
                        <p v-text="state[0].englishName"></p>
                        <p v-text="state[0].extension"></p>
                        <p v-text="state[0].chineseName"></p>
                    </div>
                    <span v-text="'￥' + state[0].price"></span>
                </div>
                <div class="orderpro">
                    <img :src="state[1].proImg[0]" alt="">
                    <div>
                        <p v-text="state[1].englishName"></p>
                        <p v-text="state[1].extension"></p>
                        <p v-text="state[1].chineseName"></p>
                    </div>
                    <span v-text="'￥' + state[1].price"></span>
                </div>
                <div class="prices">
                    本单共<span>2</span>件商品 实付：<span v-text="parseInt(state[0].price) + parseInt(state[1].price)"></span>
                </div>
                <div class="button">
                    <span>取消订单</span>
                    <span @click="topay">立即支付</span>
                </div>
                <div class="ordernum">订单号：2011531464419 <span>已完成</span></div>
                <div class="orderpro">
                    <img :src="state[2].proImg[0]" alt="">
                    <div>
                        <p v-text="state[2].englishName"></p>
                        <p v-text="state[2].extension"></p>
                        <p v-text="state[2].chineseName"></p>
                    </div>
                    <span v-text="'￥' + state[2].price"></span>
                </div>
                <div class="orderpro">
                    <img :src="state[3].proImg[0]" alt="">
                    <div>
                        <p v-text="state[3].englishName"></p>
                        <p v-text="state[3].extension"></p>
                        <p v-text="state[3].chineseName"></p>
                    </div>
                    <span v-text="'￥' + state[3].price"></span>
                </div>
                <div class="prices">
                    本单共<span>2</span>件商品 实付：<span v-text="parseInt(state[2].price) + parseInt(state[3].price)"></span>
                </div>
                <div class="button">
                    <span>订单信息</span>
                    <span>查看详情</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	import LuxHeader from '../../../components/LuxHeader';
	export default {
		data: function(){
			return {
				curIndex: 1
			}
		},
		components:{
			LuxHeader
		},
        methods:{
			topay(){
				window.location.href = 'http://localhost:8080/product.html#/ToPay';
            }
        },
		computed: {
			state() {
				return this.$store.state.product.data;
			},
		},
		created() {
			this.$store.dispatch('product/getProduct');
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
        .tab-title
            background-color:white
            display :inline-block
            height:39px
            width:100vw
            margin-top:45px
            text-align:center
            li
                width:30%
                height:100%
                line-height :39px
                display :inline-block
            .active
                color:#9b885f
                border-bottom:2px solid #9b885f
        .tab-content
            /*padding:0 20px*/
            font-size:12px
            margin-top:10px
            min-height :90vh
            background-color:white
            .navs
                min-height :90vh
                width:100vw
                .ordernum
                    padding:0 20px
                    height:34px
                    line-height:34px
                    font-size:12px
                    border-bottom:1px solid #ccc
                    span
                        background-color :#9b885f
                        color:white
                .orderpro
                    padding:0 20px
                    height:75px
                    margin-top:10px
                    border-bottom:1px solid #ddd
                    img
                        display :inline-block
                        width:55px
                        height:55px
                    div
                        margin-left:10px
                        display :inline-block
                        p:nth-child(2)
                            width: 200px
                            white-space :nowrap
                            overflow :hidden
                            text-overflow :ellipsis
                    span
                        margin-top:15px
                        float:right
                        display :inline-block
                        height:55px
                        width:55px
            .prices
                height: 36px
                line-height:36px
                padding:0 20px
                text-align :right
                span
                    color:#9b885f
            .button
                padding:0 20px
                height: 28px
                text-align :right
                span
                    text-align :center
                    line-height :28px
                    margin-left:10px
                    display :inline-block
                    width:68px
                span:nth-child(1)
                    border:1px solid #9b885f
                span:nth-child(2)
                    color:white
                    background-color #9b885f
</style>
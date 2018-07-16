<template>
    <div id="app">
        <LuxHeader>
            <a href="" slot="left" class="back">&lt;</a>
            <span slot="center">选择支付方式</span>
        </LuxHeader>
        <div class="price">
            <div>
                <span>应付金额：</span>
                <span>22616.00</span>
            </div>
        </div>
        <div class="kinds">
            <ul>
                <li>
                     <img :src="imgs[0]" alt="">
                    <div>
                        <span>银联在线支付</span><br>
                        <p>推荐无需开通网银</p>
                    </div>
                    <i @click="payIndex=0" :class="{active:payIndex==0}"></i>
                </li>
                <li>
                    <img :src="imgs[1]" alt="">
                    <div>
                        <span>支付宝</span><br>
                        <p>推荐支付宝用户使用</p>
                    </div>
                    
                    <i @click="payIndex=1" :class="{active:payIndex==1}"></i>
                </li>
                <li>
                    <img :src="imgs[1]" alt="">
                    <div>
                        <span>花呗分期</span><br>
                        <p>花呗分期</p>
                    </div>
                    <i @click="payIndex=2" :class="{active:payIndex==2}"></i>
                </li>
                <li>
                    <img :src="imgs[2]" alt="">
                    <div>
                        <span>工商银行</span><br>
                        <p>工商银行在线支付</p>
                    </div>
                    <i @click="payIndex=3" :class="{active:payIndex==3}"></i>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div @click="toprofile">
                <span>确定</span>
            </div>
        </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
	import LuxHeader from '../../../components/LuxHeader';
	export default {
		data(){
			return {
				payIndex:0,
				imgs:[
					require('./yl.jpg'),
					require('./zfb.jpg'),
					require('./gsyh.jpg'),
				]
			}
		},
        methods:{
			toprofile(){
				window.location.href = 'http://localhost:8080/profile.html';
            }
        },
		components:{
			LuxHeader
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
        .price
            background-color:white
            text-align :center
            line-height:60px
            width: 100vw
            margin-top:35px
            height:60px
            div
                display: inline-block
                width:40vw
                span:nth-child(1)
                    
                    display: inline-block
                span:nth-child(2)
                    font-size:20px
                    color:#9b885f
                    display: inline-block
        .footer
            background-color:white
            position:fixed
            bottom: 0px
            left:0
            height:60px
            width: 100vw
            box-sizing:border-box
            text-align :center
            line-height :60px
            div *
                height:40px
                border-radius :7px
                color:white
                line-height :40px
                font-size:20px
                background-color #9b885f
                display: inline-block
                width:60vw
                
        .kinds
            background-color:white
            padding:0 20px
            ul
                display: block
                li
                    border-bottom:1px solid #ccc
                    height:50px
                    padding-top:20px
                    display: flex
                    div
                        flex:1
                        span
                            font-size:16px
                            display :inline-block
                        p
                            font-size:12px
                            color:#aaa
                            display :inline-block
                    i
                        border:1px solid #aaa
                        height:20px
                        width:20px
                        border-radius :50%
                        display :inline-block
                    .active
                        background-color :#9b885f
                    img
                        margin:0 10px
                        display :inline-block
                        border:1px solid #aaa
                        border-radius :4px
                        height:23px
                        width:23px
</style>
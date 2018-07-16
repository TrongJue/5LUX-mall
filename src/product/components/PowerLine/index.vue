<template>
    <div id="app">
        <div class="line1">
            <span class="box">分期支付</span>分期12期，每期仅需￥<span v-text="pros.price/12"></span><i class="iconfont icon-msnui-more"></i>
        </div>
        <div class="line2">
            <p><span class="box">折扣</span>全网商品支持商通卡线下支付<i class="iconfont icon-msnui-more"></i></p>
            <p><span class="box">满赠</span>订单满9999元送价值1199元时尚管家服务</p>
        </div>
        <div class="line3">
            <i class="iconfont icon-duihaocheckmark17"></i>正品保证
            <i class="iconfont icon-duihaocheckmark17"></i>包关税
            <i class="iconfont icon-duihaocheckmark17"></i>包邮<i class="iconfont icon-msnui-more"></i><br>
            <i class="iconfont icon-duihaocheckmark17"></i>有质量问题支持7天退换货
            <i class="iconfont icon-duihaocheckmark17"></i>不支持发票
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	import '../../../common/fonts/iconfont.css';
	export default {
		props:{
			
        },
		computed:{
			pros(){return this.$store.state.product.data;}
		},
		created(){
			var proId = JSON.parse(localStorage.getItem('proId'))
			this.$store.dispatch('product/getProduct',proId);
//	        console.log(proId);
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        padding:10px 20px 10px 20px
        background-color:white
        font-size:12px
        .line1
            padding:10px 0
            border-bottom:1px solid #eee
            span.box
                border-radius:3px
                padding:1px 5px
                background-color:#ad9e7c
                margin-right:10px
                color:white
            i
                float:right
        .line2
            padding:10px 0
            border-bottom:1px solid #eee
            p
                span.box
                    border-radius:3px
                    padding:1px 5px
                    background-color:#ad9e7c
                    margin-right:10px
                    color:white
            p:nth-child(1)
                margin-bottom:10px
                i
                    float:right
        .line3
            padding:10px 0
            color:#666
            i
                color:#ad9e7c
                margin:5px 8px
            .icon-msnui-more
                margin: 0
                color:black
                float:right
</style>
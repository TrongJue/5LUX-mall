<template>
    <div id="#app">
        <p><span>——</span> 商品详情 <span>——</span></p>
        <div v-for="(item,index) in prosd.remark">
            <img :src="prosd.remark[index]" alt="">
        </div>
        <p><span>——</span> 正品保证 <span>——</span></p>
        <img :src="items[0]" alt="">
        <p><span>——</span> 关于第五大道 <span>——</span></p>
        <img :src="items[1]" alt="">
        <p><span>——</span> 购物温馨提示 <span>——</span></p>
        <img :src="items[2]" alt="">
        <p id="deep"><span>——</span> 关联咨询 <span>——</span></p>
        <img :src="items[3]" alt="">
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data () {
			return {
				items: [
					require('./zpbz.jpg'),
					require('./guanyu.jpg'),
					require('./wxts.png'),
                    require('./help.jpg')
                ]
            }
        },
		props:{
		
		},
		computed:{
			prosd(){return this.$store.state.product.data;}
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
        margin-top: 10px
        margin-bottom:80px
        padding:0 20px
        text-align:center
        p
            margin-top: 10px
            background-color:white
            text-align:center
            padding:10px
            span
                font-weight:bolder
        div
            img
                width:100vw
</style>
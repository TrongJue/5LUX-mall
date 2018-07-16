<template>
    <div id="app">
        <div class="list pros-item-hook" ref="menu">
            <div class="content" ref="content">
                <div @click="toDetail(statep[index]._id)" class="pro-item" v-for="(j,index) in statep" :key="index">
                    <span class="imgbox"><img :src="j.proImg[0]" alt=""></span>
                    <p v-text="j.englishName + j.chineseName"></p>
                    <span class="price" v-text="'￥' + j.price"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	export default {
		methods:{
			toDetail(id){
				localStorage.setItem('proId',JSON.stringify(id));
				window.location.href= 'http://localhost:8080/product.html';
			},
        },
		watch: {
			statep(newValue, oldValue) {
				this.$refs.content.style.width = (150 * newValue.length) + 'px';
				this.$nextTick(
					() => {
						this.menuScroll = new BScroll(this.$refs.menu, {
							click: true,
							scrollX: true,
						});
					}
				);
			}
			
		},
		computed: {
			state() {
				return this.$store.state.category.data;
			},
			statep() {
				return this.$store.state.product.data;
			},
		},
		created() {
			//命令vuex仓库去拿数据了
			this.$store.dispatch('category/getCategory');
			this.$store.dispatch('product/getProduct');
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        padding:15px 0
        .list
            width: 100%
            overflow:hidden
            .content
                display:flex
                flex-wrap:nowrap
                .pro-item
                    display:inline-block
                    width: 150px
                    text-align:center
                    font-size:13px
                    .imgbox
                        display:inline-block
                        width:130px
                        height:130px
                        img
                            display:inline-block
                            width:86px
                            height:130px
                    p
                        width:130px
                        white-space :nowrap
                        overflow :hidden
                        text-overflow :ellipsis
                        padding-top:5px
                        text-align:center
                    .price
                        padding-top:8px
                        color:#999
                        display:inline-block
</style>
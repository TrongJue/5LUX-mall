<template>
    <transition name="fade">
        <div class="dialog" @click="close" v-show="isShow">
            <div>
            </div>
            <div class="content" v-for="(item,index) in state" :key="index">
                <span v-text="state[index].name">
                
                </span>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
	export default {
		data(){
			return {
				curIndex:1
            }
        },
		props:['isShow'],
        methods:{
	        close(e){
			        if(e.target.className.indexOf('dialog')!=-1)
		                this.$emit('close');
		        
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
    .dialog
        margin-top:100px
        width: 100vw
        height:100vh
        background-color:rgba(0,0,0,0.5)
        position:fixed
        top:0
        z-index:50
        .content
            width:90vw
            height:100%
            background-color:white
            z-index:100
            float:right
</style>
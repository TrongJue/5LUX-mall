<template>
        <Dialog>
            <div class="dialog-conent" slot="content">
                <div class="dialog-pro">
                    <span class="dialog-proimg"><img :src="pro.proImg[0]" alt=""></span>
                    <span>【包邮 免关税】<span v-text="pro.extension"></span></span>
                    <span v-text="'￥' + pro.price + '×' + number"></span>
                    <span></span>
                </div>
                <div class="dialog-kind">
                    <p>尺寸</p>
                    <ul v-for="(i,index) in pro.size">
                        <li :class="{active:$store.state.product.kindiIndex==index}" @click="$store.state.product.kindiIndex=index" :key="index" v-text="pro.size[index]"></li>
                    </ul>
                    <p>颜色</p>
                    <ul v-for="(j,index) in pro.color">
                        <li :class="{active:$store.state.product.kindjIndex==index}" @click="$store.state.product.kindjIndex=index" :key="index" v-text="pro.color[index]"></li>
                    </ul>
                </div>
            </div>
            <div slot="button" class="button">
                <router-link to="/">确定</router-link>
            </div>
            <router-view></router-view>
        </Dialog>
</template>

<script type="text/ecmascript-6">
	import Dialog from '../../../components/Dialog';
	export default {
		data(){
			return {
				number:1,
				dialogShow:false,
				chooseShow:false,
			}
		},
		components:{
			Dialog
        },
        methods:{
//			choose1(e,index){
//				this.kindiIndex = index;
//				this.$emit('choose1',this.kindiIndex);
//            },
//	        choose2(e,index){
//		        this.kindjIndex = index;
//		        this.$emit('choose2',this.kindjIndex);
//	        }
        },
        mounted(){
	        
        },
		computed:{
   
			pro(){return this.$store.state.product.data;}
		},
		created(){
			var proId = JSON.parse(localStorage.getItem('proId'))
			this.$store.dispatch('product/getProduct',proId);
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .dialog-conent
        font-size:13px
        .dialog-pro
            position:relative
            .dialog-proimg
                background-color:white
                border:1px solid #e5e5e5
                box-sizing:border-box
                display:inline-block
                width: 100px
                height:100px
                text-align:center
                position: absolute
                top:-40px
                img
                    width: 77px
                    height:98px
            span:nth-child(2)
                display:block
                padding-left:110px
                span
                    display:inline-block
            span:nth-child(3)
                display:block
                color:#ad9e7c
                padding-left:110px
        .dialog-kind
            margin-top:50px
            p
                padding:10px 0
                border-top:1px solid #e5e5e5
            ul
                
                display:inline-block
                li
                    border:2px solid white
                    font-size:12px
                    margin:0 10px 10px 10px
                    padding:3px 10px
                    border-radius:5px
                    display:inline-block
                .active
                    border:2px solid #ad9e7c
    .button
        color:white
        & *
            color:white
</style>
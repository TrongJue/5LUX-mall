<template>
    <div>
        <div class="title" ref="menu">
            <ul v-if="state!==null&&state.length>0" ref="content">
                <li class="title-item title-item-hook" v-for="(i,index) in state" :key="index">
                    <span class="titleone-el" v-show="i.pid == 0" v-text="i.name" :class="{active:index == curIndex}"
                          @click="title1(index,$event)"></span>
                </li>
            </ul>
        </div>
        <ul ref="imgs">
            <li class="titleimg" v-for="(i,index) in state" :key="index">
                <img v-show="index == imgIndex" class="titleimg-el" :src="i.avator" alt="">
            </li>
        </ul>
        <ul class="kind-menu">
            <li><span class="choose">综合</span></li>
            <li><span>品牌</span></li>
            <li><span @click="isShow=true">分类</span></li>
            <li><span>筛选</span></li>
        </ul>
        <CateTitletwo :is-show="isShow" @close="isShow=false"></CateTitletwo>
        <div class="list pros-item-hook" ref="pros">
            <div>
                <div @click="toDetail(statep[index]._id)" class="pro-item" v-for="(j,index) in statep" :key="index" v-show="imgIndex+1 == j.pid">
                    <img :src="j.proImg[0]" alt="">
                    <p v-text="j.englishName"></p>
                    <p v-text="j.chineseName"></p>
                    <span v-text="'￥' + j.price"></span>
                    <span v-text="'￥' + j.oldPrice"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	import CateTitletwo from '../cate-Titletwo';
	
	export default {
		data() {
			return {
				scrollY: 0,
				heightList: [],
				imgIndex: 0,
				curIndex: 0,
                kindIndex:1,
				isShow:false,
				isS:false
			}
		},
		
		methods: {
			title1(index, e) {
				if (!e._constructed) return;
				this.imgIndex = index;
				this.curIndex = index;
				if (index > 3&&index < 8) {
					var target = this.$refs.menu.getElementsByClassName("title-item-hook")[index - 3];
					this.menuScroll.scrollToElement(target, 500);
				}
			},
			toDetail(id){
				localStorage.setItem('proId',JSON.stringify(id));
				window.location.href= 'http://localhost:8080/product.html';
			}
		},
		watch: {
			state(newValue, oldValue) {
//				newValue.forEach(item => {
//					this.imgs.push(require(item.avatar));
//                })
				this.$nextTick(
					() => {
//						this._initHeightList();
						this.$refs.content.style.width = (60 * newValue.length) + 'px';
						this.menuScroll = new BScroll(this.$refs.menu, {
							click: true,
							scrollX: true,
						});
						this.prosScroll = new BScroll(this.$refs.pros, {
							click: true,
						});
					}
				);
			}
			
		},
		components: {
			CateTitletwo
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
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .title
        width: 100%
        height:100%
        overflow: hidden
        ul
            display: flex
            flex-wrap nowrap
            .title-item
                width: 30px
                height: 39px
                padding: 0 15px
                display: inline-block
                margin-bottom :2px
                .titleone-el
                    width: 30px
                    height: 39px
                    line-height: 39px
                    text-align: center
                    display: inline-block
                    color: #999
                .active
                    border-bottom: 3px solid black
                    color:black
            
    .titleimg
        margin-top: 1px
        .titleimg-el
            width: 100vw
            height: 251px
    .kind-menu
        display:block;
        width:100vw
        height:39px
        li
            display:inline-block
            box-sizing:border-box
            width:24vw
            line-height:39px
            text-align:center
        .choose
            color:#ad9e7c
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .list
        width: 100%
        height:357px
        overflow:hidden
        div
            .pro-item
                width:50vw
                height:307px
                display:inline-block
                box-sizing:border-box
                border-top:1px solid #e5e5e5
                border-bottom:1px solid #e5e5e5
                text-align:center
                img
                    width:11.5rem
                    height:14.7rem
                    margin-bottom:10px
                p:nth-child(2)
                    font-size:14px
                    padding-bottom:5px
                p:nth-child(3)
                    color:#999
                    font-size:13px
                    padding-bottom:5px
                span:nth-child(4)
                    font-size:13px
                    color:#ad9e7c
                    font-weight:bolder
                span:nth-child(5)
                    font-size:13px
                    color:#999
                    text-decoration:line-through
            div.pro-item:nth-child(odd)
                border-right:1px solid #e5e5e5
</style>
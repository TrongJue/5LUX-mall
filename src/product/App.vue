<template>
    <div id="app">
        <template v-if="pro!==null" id="header">
            <LuxHeader class="header">
                <a href="" slot="left" class="back">&lt;</a>
                <span slot="center" class="centertitle">
                    <a href="#" :class="{active:lineIndex==1}" @click="lineIndex=1">商品</a>
                    <a href="#shop" :class="{active:lineIndex==2}" @click="lineIndex=2">详情</a>
                    <a href="#deep" :class="{active:lineIndex==3}" @click="lineIndex=3">推荐</a>
                </span>
                <span slot="right" :class="{select:isLove,unselect:!isLove}" @click="toggle()" class="collect iconfont icon-iconlove" href=""></span>
            </LuxHeader>
            <div id="banner" class="banner" ref="wrapper">
                <ul class="banner-content" ref="content">
                    <li v-for="(item,index) in pro.proImg"  class="banner-list-item-hook">
                        <img @click="title2(index,$event)" :src="pro.proImg[index]" alt="">
                    </li>
                </ul>
            </div>
            <div class="prices">
                <div class="price">
                    <span v-text="'￥' + pro.price"></span>
                    <span v-text="'￥' + pro.oldPrice"></span>
                    <span>红卡价 ></span>
                </div>
                <div class="extension">【包邮 免关税】 <span v-text="pro.extension"></span></div>
                <div class="send">
                    <i class="iconfont icon-diqiu"></i>
                    <span v-text="pro.sendTime + '个工作日'"></span>
                    <span v-text="pro.sendPlace + '集合店发货，本地直发'"></span>
                </div>
            </div>
            <PowerLine></PowerLine>
            <div class="choose">
                <div>产品参数<span>></span></div>
                <router-link to="/CartDialog">
                    <div @click="chooseShow=true" v-show="!chooseShow">选择：颜色/尺码<span>></span></div>
                </router-link>
                <router-link to="/CartDialog">
                    <div @click="chooseShow=true" v-show="chooseShow" v-text="'选择：尺码：' + pro.size[$store.state.product.kindiIndex] + '/颜色：' + pro.color[$store.state.product.kindjIndex]"></div>

                </router-link>
                <router-view></router-view>
                <!--<div @click="chooseShow=true" v-show="chooseShow" v-text="'选择：颜色：' + pro.size[kindiIndex] + '/尺码：' + pro.color[kindjIndex]"></div>-->
            </div>
            <div id="shop" class="shop clearfix">
                <span><img :src="pro.shopImg" alt=""></span>
                <span v-text="pro.shop"></span>
                <span>查看 ></span>
            </div>
            <ProDetail id="ProDetail"></ProDetail>
            <CartFooter></CartFooter>
        </template>
    </div>
</template>

<script type="text/ecmascript-6">
	import '../common/fonts/iconfont.css';
	import axios from 'axios';
	import BScroll from 'better-scroll';
	import LuxHeader from '../components/LuxHeader';
	import PowerLine from './components/PowerLine';
	import ProDetail from './components/ProDetail';
	import CartFooter from './components/CartFooter';
	import CartDialog from './components/CartDialog';
	export default {
		data(){
			return {
				data: null,
                lineIndex:1,
				isLove:false,
                number:1,
				dialogShow:false,
				chooseShow:false,
                kindiIndex:0,
				kindjIndex:0
            }
        },
		components:{
			LuxHeader,
            PowerLine,
			ProDetail,
			CartFooter,
			CartDialog
        },
		methods:{
			toggle:function () {
				this.isLove=!this.isLove
                if(this.isLove == true){
					alert('收藏成功');
                }else{
                	alert("取消收藏");
                }
            },
			title2(index, e) {
				if (!e._constructed) return;
				let bannerList = this.$refs.wrapper.getElementsByClassName('banner-list-item-hook');
				let target = bannerList[index];
				this.wrapperScroll.scrollToElement(target,300);
			},
		},
		watch: {
			pro(newValue, oldValue) {
				this.$nextTick(
					() => {
					    this.$refs.content.style.width = (100 * newValue.proImg.length) + 'vw';
						this.wrapperScroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollX: true,
                            snap:{
//								loop: true,
                                stepX:414,
                                stepY:414,
                                threshold:0.5,
//                                speed:500
                            },
						});
					}
				);
			}
		},
        mounted(){
//	        window.addEventListener('scroll', this.handleScroll)
        },
        computed:{
	        pro(){return this.$store.state.product.data;}
        },
        created(){
	        var count = JSON.parse(localStorage.getItem('count'))
	        var proId = JSON.parse(localStorage.getItem('proId'));
	        
	        this.$store.dispatch('product/getProduct',proId);
	        this.$store.dispatch('cart/getCartList',count);
	        this.$store.dispatch('cart/getCartPro',count);
//	        console.log(proId);
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        background-color:#eee
        .header
            position:fixed
            top:0
            height:44px
            .back
                font-size:25px
            .collect
                font-size:25px
            .select
                color:red
            .unselect
                color:black
            .center
                height:44px
                display:inline-block
                a
                    display:inline-block
                    height:42px
                    padding:0 5px
                .active
                    border-bottom:2px solid black
                
    
       
    .banner
        background-color:white
        width:100%
        height: 100%
        overflow :hidden
        .banner-content
            height: 100%
            display:flex
            /*width:300vw*/
            flex-wrap:nowrap
            li
                width:100vw
                height:100vw
                display:inline-block
                text-align:center
                img
                    width:80vw
                    height:100vw
                    display:inline-block
    .prices
        background-color:white
        padding-left:20px
        padding-bottom:10px
        margin-bottom:10px
        .price
            span:nth-child(1)
                font-size: 20px
                color:#ad9e7c
            span:nth-child(2)
                font-size: 13px
                text-decoration:line-through
                color:#999
            span:nth-child(3)
                font-size: 13px
                color:#ad9e7c
                display:inline-block
                padding:1px 3px
                border:1px solid #ad9e7c
        .extension
            font-size: 16px
            padding:20px 0 5px 0
        .send
            .icon-diqiu
                color:#999
            span:nth-child(2)
                font-size: 12px
                color:#999
            span:nth-child(3)
                font-size: 12px
                color:#ad9e7c
                text-decoration:underline
    .choose
        margin-top:10px
        background-color:white
        padding:0px 20px
        div
            border-bottom:1px solid #eee
            padding:10px 0
            span
                color:#999
                float:right
    .shop
        margin-top:10px
        background-color:white
        padding:0px 20px
        span:nth-child(1)
            width: 47px
            height:47px
            display:inline-block
            text-align:center
            box-sizing:border-box
            margin-right:10px
            vertical-align:middle
            img
                width: 40px
                height:20px
                margin-top:15px
        span:nth-child(2)
            vertical-align:middle
        span:nth-child(3)
            color:#999
            float:right
            margin-top:12px
    
</style>
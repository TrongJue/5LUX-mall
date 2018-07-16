<template>
    <div id="banner" class="banner" ref="menu">
        <ul class="banner-content" ref="content">
            <li v-for="(item,index) in banners" :key="index"  class="banner-list-item-hook">
                <img :src="banners[index]" alt="">
            </li>
        </ul>
        <!--<span class="bannerbox" v-for="(item,indexs) in banners" :key="indexs">-->
            <!--<span :class="{active:curIndex==indexs}"></span>-->
        <!--</span>-->
    </div>
</template>

<script type="text/ecmascript-6">
	import axios from 'axios';
	import BScroll from 'better-scroll';
	export default {
		data(){
			return {
				curIndex:0,
				scrollY: 0,
				bannerList: [],
				banners:[
					require('./banner1.jpg'),
					require('./banner2.jpg'),
					require('./banner3.jpg'),
					require('./banner4.jpg'),
					require('./banner5.jpg'),
				]
			}
		},
		methods:{
		
		},
		watch: {
			banners(newValue, oldValue) {
				this.curIndex=this.index;
				console.log(this.index);
            }
		},
        mounted(){
            this.$nextTick(
                () => {
                    this.menuScroll = new BScroll(this.$refs.menu, {
                        click: true,
                        scrollX: true,
							snap:{
//								loop: true,
								stepX:414.4,
								stepY:414.44,
								threshold:0.5,
                                speed:1000
							},
                    });
                }
            )
        },
		computed:{
  
		},
        created(){
	       
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #banner
        width:100%
        overflow :hidden
        .banner-content
            width:500vw
            display:flex
            flex-wrap:nowrap
            .banner-list-item-hook
                width:100vw
                height:111vw
                display:inline-block
                text-align:center
                img
                    display:inline-block
                    width: 100vw
                    height:111vw
        .bannerbox
            width: 30px
            display: inline-block
            span
                width: 20px
                height: 20px
                background-color :black
                display: inline-block
            .active
                background-color :orange
</style>
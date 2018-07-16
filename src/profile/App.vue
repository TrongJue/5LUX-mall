<template>
    <div id="app" ref="menu">
        <div class="content" ref="content">
            <ProfileHead></ProfileHead>
            <ProfileOrder></ProfileOrder>
            <ProfileMeans></ProfileMeans>
            <ProfileServe></ProfileServe>
            <SpecialServe></SpecialServe>
            <div class="kefu">电话客服：<span>400-867-6738</span></div>
        </div>
        <DeepNav></DeepNav>
    </div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	import ProfileHead from './components/ProfileHead';
	import ProfileOrder from './components/ProfileOrder';
	import ProfileMeans from './components/ProfileMeans';
	import ProfileServe from './components/ProfileServe';
	import SpecialServe from './components/SpecialServe';
	import DeepNav from '../components/DeepNav';
	export default {
		components:{
			ProfileHead,
			ProfileOrder,
			ProfileMeans,
			ProfileServe,
			SpecialServe,
			DeepNav
        },
        mounted(){
	        this.$nextTick(
		        () => {
			        this.menuScroll = new BScroll(this.$refs.menu, {
				        click: true,
			        });
		        }
	        );
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        background-color :#eee
        height: 100vh
        overflow :hidden
        width:105vw
        .content
            width:100vw
            height:110vh
            .kefu
                line-height:44px
                margin-bottom:10px
                background-color :white
                /*padding:0px 20px*/
                width: 100vw
                height:44px
                span
                    color:#CD853F
                    
</style>
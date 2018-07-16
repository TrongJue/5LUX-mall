<template>
    <div id="app">
        <div class="title clearfix">
            <i class="iconfont icon-shezhi"></i>
            <i class="iconfont icon-liaotian"></i>
        </div>
        <div class="usermsg">
            <img class="userimg" :src="userimgs[2]" alt="">
            <span class="username">
                <span class="name">用户名：<span class="account" v-text="count"></span></span>
                <br>
                <span class="vip">V1会员 ></span>
            </span>
            <img class="gifs" :src="userimgs[1]" alt="">
        </div>
        <div class="moudle">
            <div class="loves"><i class="iconfont icon-loveit"></i> 收藏0</div>
            <div class="attach"><i class="iconfont icon-jia"></i> 关注0</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import '../../../common/fonts/iconfont.css'
	export default {
		data(){
			return {
				count:'user',
				userimgs:[
					require('./profilebg.png'),
					require('./profilegift.gif'),
					require('./userimg.png')
				]
			}
		},
        methods:{
			
        },
		computed: {
			state() {
				return this.$store.state.getuser.data;
			}
		},
		mounted(){
			
        },
		created(){
			this.count = JSON.parse(localStorage.getItem('count'))
            console.log(this.count);
			this.$store.dispatch('getuser/getuser');
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        color:#aaa
        width: 100vw
        height: 192px
        background-position 100% 100%
        background-repeat :no-repeat
        background-size 100vw 192px
        background-image :url('./profilebg.png')
        position: relative
        .title
            font-size:50px
            padding:10px 20px 0 20px
            height: 33px
            .icon-shezhi
                font-size:23px
                float:left
            .icon-liaotian
                font-size:23px
                float:right
        .usermsg
            padding:35px 0 0 20px
            height: 60px
            .username
                font-size:15px
                padding-left:20px
                display :inline-block
                vertical-align:middle
                .name
                    color:white
                    display :inline-block
                    .account
                        display :inline-block
                .vip
                    margin-top:5px
                    color:#aaa
                    display :inline-block
            .userimg
                display :inline-block
                vertical-align:middle
                width: 60px
                height: 60px
            .gifs
                display :inline-block
                vertical-align:middle
                float:right
                width:48px
                height: 70px
        .moudle
            position: absolute
            bottom: 0
            left:0
            background-color :rgba(255,255,255,0.1)
            height:40px
            width: 100vw
            display :flex
            align-items: center;
            color:#ccc
            div
                text-align:center
                height:16px
                justify-content :center
            .loves
                flex:1
                border-right:1px solid #aaa
            .attach
                flex:1
</style>
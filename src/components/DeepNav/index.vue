<template>
    <div id="app">
        <span @click="span1" :class="{active:iconIndex==1}"><i class="iconfont icon-home"></i><br>首页</span>
        <span @click="span2" :class="{active:iconIndex==2}"><i class="iconfont icon-shopping-fill"></i><br>商城</span>
        <span @click="span3" :class="{active:iconIndex==3}"><i class="iconfont icon-diqiu"></i><br>海外服务</span>
        <span @click="span4" :class="{active:iconIndex==4}"><i class="iconfont icon-dingwei"></i><br>到店</span>
        <span @click="span5" :class="{active:iconIndex==5}"><i class="iconfont icon-user"></i><br>我的</span>
    </div>
</template>

<script type="text/ecmascript-6">
	import '../../common/fonts/iconfont.css';
	export default {
		data(){
			return {
				iconIndex:1
            }
        },
        methods:{
			span1(){
				this.iconIndex=1;
				window.location.href = 'http://localhost:8080/index.html';
            },
	        span2(){
		        this.iconIndex=2;
		        window.location.href = 'http://localhost:8080/category.html';
	        },
	        span3(){
		        this.iconIndex=3;
	        },
	        span4(){
		        this.iconIndex=4;
	        },
	        span5(){
		        this.iconIndex=5;
		        window.location.href = 'http://localhost:8080/profile.html';
	        }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        position:fixed
        bottom: 0
        left:0
        width:100vw
        height:48px
        background-color:black
        text-align:center
        color:#aaa
        span
            padding-top :3px
            font-size:11px
            width:19%
            display:inline-block
            i
                font-size:26px
                display:inline-block
        span.active
            color:#fff
</style>
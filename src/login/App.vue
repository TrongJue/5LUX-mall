<template>
    <div id="app">
        
        <router-view></router-view>
        <div class="turn">
            <a class="turnleft" v-show="loginType == 1" @click="toRegister">立即注册</a>
            <a class="turnleft" v-show="loginType == 0">找回密码</a>
            <a class="turncenter" v-show="loginType == 2">点击注册，表示您已经同意《第五大道用户服务协议》</a>
            <a class="turnright" v-show="loginType == 1" @click="toPasswordLogin">账号密码登录</a>
            <a class="turnright" v-show="loginType == 0" @click="toMessageLogin">快速登录</a>
        </div>
       
    </div>
</template>

<script type="text/ecmascript-6">
    import MessageLogin from './components/MessageLogin'
    import PasswordLogin from './components/PasswordLogin'
    import Register from './components/Register'
	export default {
    	data(){
    		return {
    			loginType: 1
            }
        },
		components:{
		},
        methods:{
    		toMessageLogin(){
			    this.loginType = 1;
			    this.$router.push('/MessageLogin');
            },
            toPasswordLogin(){
	            this.loginType = 0;
	            this.$router.push('/PasswordLogin');
            },
            toRegister(){
	            this.loginType = 2;
	            this.$router.push('/Register');
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        margin:0 auto
    .turn
        margin-top: 15px
        margin:15px 40px 0 40px
        font-size:12px
        text-align:center
        .turnleft
            float:left
            color:#999
        .turncenter
            color:#999
        .turnright
            float:right
            color:#999
</style>
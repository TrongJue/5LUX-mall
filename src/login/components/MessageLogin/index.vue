<template>
    <div>
        <LuxHeader>
            <a href="" slot="left" class="back">&lt;</a>
            <p slot="center" class="title">快速登录</p>
        </LuxHeader>
        <div class="msg">
            <LoginInput class="input" placeholder="请输入手机号" @change="phone = $event"></LoginInput>
            <button class="getcode" v-text="text" @click="getCode" :disabled="codeFlag"></button>
            <LoginInput class="input" placeholder="请输入验证码" @change="code = $event"></LoginInput>
            <div class="loading">
                <Loading v-if="loginFlag"></Loading>
            </div>
            <LoginButton class="login" text="登录" :handler="login"></LoginButton>
        </div>
        <LoginFooter></LoginFooter>
    </div>
</template>

<script type="text/ecmascript-6">
	import LuxHeader from '../../../components/LuxHeader';
    import LoginInput from '../LoginInput';
    import LoginButton from '../LoginButton';
	import Loading from '../../../components/Loading';
	import LoginFooter from '../LoginFooter';
    import axios from 'axios';
	export default {
		data(){
			return{
				phone:'',
                code:'',
                text:'获取验证码',
                codeFlag:false, //标识获取验证码按钮是否禁用
                loginFlag:false //标识登录按钮是否禁用
            }
        },
        methods:{
			login(){
				this.loginFlag = true;
				axios.post('http://localhost:3000/login/message',{phone:this.phone,code:this.code})
                    .then(result => {
                    	if(result.data === 1){
//		                    localStorage.setItem('count',count);
		                    localStorage.setItem('count',JSON.stringify(this.count));
		                    window.location.href = 'http://localhost:8080/index.html';
                        }
                        else{
		                    alert(result.data);
		                    this.loginFlag = false;
                        }
                    })
                    .catch(err => {
	                    alert(err);
				        this.loginFlag = false;
                    });
            },
            getCode(){
	            this.codeFlag = true;
	            axios.post('http://localhost:3000/login/getcode',{phone:this.phone})
		            .then(result => {
			            if(result.data === 1){
			            	//倒计时
                            var second = 30
                            this.interval = setInterval(() => {
                            	if(second>0)
		                            this.text = (--second) +'秒';
	                            else{
		                            this.text = '获取验证码';
		                            this.codeFlag = false;
		                            clearInterval(this.interval);
	                            }
                            },1000);
                        }else{
				            alert(result.data);
				            this.codeFlag = false;
                        }
		            })
		            .catch(err => {
		            	alert(err);
			            this.codeFlag = false;
		            });
            }
        },
		components:{
			LoginInput,
			LoginButton,
			LuxHeader,
			Loading,
			LoginFooter
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .msg
        margin-top:50px
        position:relative
        .loading
            height:30px
        .getcode
            border:none
            padding:5px 10px
            position:absolute
            top:62px
            right:45px
        .input
            width: 80vw
            margin-left:10vw
            margin-top:2vw
            height:10vw
            z-index:1em
            border:none
            outline:none
            border-bottom:1px solid #ccc
            font-size:16px
        .login
            width: 80vw
            height:10vw
            margin-left:10vw
            margin-top:5vw
            border:none
            outline:none
            font-size:16px
            color:white
            font-white:bloder
            background-color:#c8ab75
            border-radius:5px
    .turn
        margin-top: 15px
        margin:15px 40px 0 40px
        font-size:12px
        .turnleft
            float:left
            color:#999
        .turnright
            float:right
            color:#999

</style>
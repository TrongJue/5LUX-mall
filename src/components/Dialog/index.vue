<template>
    <div class="dialog" @click="close">
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="button">
            <slot name="button"></slot>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
	export default {
		methods:{
			close(e){
//				console.log(e.target.className.indexOf('dialog'));
				if(e.target.className.split(' ').indexOf('dialog')!=-1)
					this.$router.push('/');
			}
        }
	};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .dialog
        width: 100vw
        height: 100vh
        position:fixed
        top:0
        left:0
        z-index:102
        background-color:rgba(0,0,0,0.5)
        .content
            padding:20px
            width: 100vw
            position:fixed
            bottom:0
            z-index:103
            min-height:100px
            background-color:white
            margin-bottom:50px
        .button
            background-color:#ad9e7c
            position:fixed
            bottom:0
            z-index:104
            color:white
            font-size:16px
            text-align:center
            line-height:50px
            height:50px
            width: 100vw
</style>
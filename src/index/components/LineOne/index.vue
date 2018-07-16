<template>
        <img :src="src" alt="">
</template>

<script type="text/ecmascript-6">
	export default {
		data(){
			return {
			
			}
		},
		props:{
			src:String
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    img
        margin-top:5px
        width:100vw
    
</style>
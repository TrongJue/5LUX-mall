<template>
    <button :type="type" v-text="text" @click="handler"></button>
</template>

<script type="text/ecmascript-6">
	export default {
		props:{
			text: {
				type:String,
				default:'确定'
            },
            type:{
	            type:String,
	            default:'button'
            },
            handler:Function
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
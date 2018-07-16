<template>
    <input :type="type" :placeholder="placeholder" @change="$emit('change',$event.target.value)">
</template>

<script type="text/ecmascript-6">
	export default {
		props:{
			type:{
				type:String,
                default:'text'
            },
            placeholder:String
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
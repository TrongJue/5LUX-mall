<template>
    <div id="app">
        <span v-for="(item,index) in imgs" :key="index">
            <img :src="imgs[index]" alt="">
        </span>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data(){
			return {
				imgs:[
					require('./lt1.jpg'),
					require('./lt2.jpg'),
					require('./lt3.jpg'),
					require('./lt4.jpg'),
                ]
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        color:black
        span:nth-child(even)
            display:inline-block
            width:50vw
            margin-top:1vw
            text-align:right
            img
                width:49vw
                display:inline-block
        span:nth-child(odd)
            display:inline-block
            width:50vw
            margin-top:1vw
            text-align:left
            img
                width:49vw
                display:inline-block
</style>
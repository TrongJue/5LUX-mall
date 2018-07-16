<template>
    <div>
        <div id="app">
        <span v-for="(item,index) in imgs" :key="index">
            <img :src="imgs[index]" alt="">
        </span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data(){
			return {
				imgs:[
					require('./lf1.jpg'),
					require('./lf2.jpg'),
					require('./lf3.jpg'),
					require('./lf4.jpg'),
				]
			}
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        width:100vw
        color:black
        /*padding:1vw*/
        span
            display:inline-block
            width:25%
            text-align:center
            img
                width:24vw
                display:inline-block
</style>
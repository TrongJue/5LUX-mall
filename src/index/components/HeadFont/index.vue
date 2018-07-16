<template>
    <div id="header" :class="isFixed == true ? 'isFixed' :''">
        <span v-for="(item,index) in icons.imgs,icons.fonts" :key="index">
            <img :src="icons.imgs[index]" alt=""><br>
            <span v-text="icons.fonts[index]"></span>
        </span>
    </div>
</template>

<script type="text/ecmascript-6">
	
	export default {
		data(){
			return {
				icons:{
					fonts:['上新','海外馆','值得买','闪购','品牌'],
					imgs:[
						require('./icon1.png'),
						require('./icon2.png'),
						require('./icon3.png'),
						require('./icon4.png'),
						require('./icon5.png'),
					],
					
                }
			}
		},
        props:{
	        isFixed:false
        },
		mounted () {
			window.addEventListener('scroll', this.handleScroll);
		},
        methods:{
	        handleScroll () {
		        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		        let headerTop = document.getElementById("header");
//		        console.log(scrollTop)
		        if (scrollTop > 460) {
			        this.isFixed = true;
		        } else {
			        this.isFixed = false;
		        }
	        }
        },
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll);
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    
    .isFixed
        width:100vw
        background-color :white
        position: fixed;
        top: 20px;
        left:0
        z-index: 104;
        color:#777
        padding:3px 0
        span
            text-align:center
            display:inline-block
            width:20%
            img
                padding-top:2px
                width: 25px
                height:25px
            span
                font-size: 13px
                text-align:center
                width: 15vw
    #header
        width:100vw
        background-color :white
        margin-top:20px
        color:#777
        span
            text-align:center
            display:inline-block
            width:20%
            img
                width: 25px
                height:25px
            span
                font-size: 13px
                padding-top:5px
                text-align:center
                width: 15vw
                height:5vw
</style>
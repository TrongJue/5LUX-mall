<template>
    <div id="seachhead" class="header clearfix">
        <i class="iconfont icon-saoma"></i>
        <span class="search clearfix"><i class="iconfont icon-sousuo"></i> <p>5LUX.COM</p></span>
        <i @click="tocart" class="iconfont icon-bag clearfix"><button class="count" value="4">2</button></i>
        
    </div>
</template>

<script type="text/ecmascript-6">
	import '../../common/fonts/iconfont.css';
	export default {
		props:{
			isFixed:false
		},
		mounted () {
			window.addEventListener('scroll', this.handleScroll);
		},
		methods:{
			tocart(){
				window.location.href = 'http://localhost:8080/product.html#/ShopCart';
            },
			handleScroll () {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				let headerTop = document.getElementById("app");
//		        console.log(scrollTop)
                if (scrollTop > 460) {
//					this.isFixed = true;
                    document.getElementById("seachhead").style.background = "black";
                }else {
                    document.getElementById("seachhead").style.background = "linear-gradient(to bottom, black, transparent)";
//					this.isFixed = false;
                }
			}
		},
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll);
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header
        z-index:100
        width: 100vw
        height:44px
        background: linear-gradient(to bottom, black, transparent);
        transition:all 0.2s
        color:white
        font-size:16px
        line-height:44px
        text-align:center
        position:fixed
        i
            font-size:26px
        .search
            background-color:#777
            display:inline-block
            width:65vw
            height:30px
            text-align:left
            vertical-align:middle
            position:relative
            border-radius:5px
            .icon-sousuo
                position:absolute
                left:6px
                top:10px
                line-height:15px
                /*vertical-align:middle*/
                font-size:20px
            p
                margin-left:30px
                display:inline-block
                line-height:35px
                vertical-align:top
                
        .icon-saoma
            float:left
            margin-left:15px
            vertical-align:middle
            font-size:24px
        .icon-bag
            float:right
            margin-right:30px
            vertical-align:middle
            position:relative
        .count
            font-size:12px
            color:white
            font-weight:bolder
            background-color:red
            width: 15px
            height:15px
            border-radius:50%
            display:inline-block
            border:none
            position:absolute
            top: 10px
</style>
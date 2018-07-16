<template>
    <div class="header clearfix">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    
    .header
        position:fixed
        top:0
        height:44px
        line-height:44px
        width:100vw
        text-align:center
        border-bottom:1px solid #ccc
        z-index:101
        background-color:white
        &>*
            /*position: absolute*/
            height:44px
            /*top:0*/
            display:inline-block
            font-size:16px
        .left
            margin-left:20px
            float:left
            color:#aaa
        .center
            text-align:center
        .right
            margin-right:20px
            float:right
        & *
            color:black
</style>
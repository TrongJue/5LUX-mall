<template>
    <div id="app">
        <SearchHeader></SearchHeader>
        <CateTitleone class="list-one"></CateTitleone>
    </div>
</template>

<script type="text/ecmascript-6">
    import SearchHeader from '../components/SearchHeader';
    import CateTitleone from './components/cate-titleone';
	export default {
		components:{
			SearchHeader,
			CateTitleone
        },
        computed:{
	        state(){return this.$store.state.category.data;}
        },
		created(){
			//命令vuex仓库去拿数据了
//			this.$store.dispatch('category/getCategory');
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .list-one
        padding-top:44px
</style>
<template>
    <div id="app">
        <SearchHeader></SearchHeader>
        <HeadBanner></HeadBanner>
        <HeadFont></HeadFont>
        <LineTwo></LineTwo>
        <LineOne :src="imgs[0]"></LineOne>
        <LineOne :src="imgs[1]"></LineOne>
        <LineFore></LineFore>
        <LineOne :src="imgs[2]"></LineOne>
        <GoodsList></GoodsList>
        <LineOne :src="imgs[3]"></LineOne>
        <LineOne :src="imgs[4]"></LineOne>
        <ArticleMark :i="0"></ArticleMark>
        <GoodsList></GoodsList>
        <LineOne :src="imgs[5]"></LineOne>
        <ArticleMark :i="1"></ArticleMark>
        <LineOne :src="imgs[6]"></LineOne>
        <ArticleMark :i="2"></ArticleMark>
        <GoodsList></GoodsList>
        <LineOne :src="imgs[7]"></LineOne>
        <ArticleMark :i="3"></ArticleMark>
        <ReturnTop></ReturnTop>
        <DeepNav></DeepNav>
    </div>
</template>

<script type="text/ecmascript-6">
	import SearchHeader from '../components/SearchHeader';
	import HeadBanner from './components/HeadBanner';
	import HeadFont from './components/HeadFont';
	import LineTwo from './components/LineTwo';
	import LineFore from './components/LineFore';
	import LineOne from './components/LineOne';
	import ArticleMark from './components/ArticleMark';
	import GoodsList from './components/GoodsList';
	import ReturnTop from '../components/ReturnTop';
	import DeepNav from '../components/DeepNav';
	export default {
		components:{
			SearchHeader,
			HeadBanner,
			HeadFont,
			LineTwo,
			LineFore,
			LineOne,
			ArticleMark,
			GoodsList,
			ReturnTop,
			DeepNav
		},
		data(){
			return {
				imgs:[
					require('./lo1.jpg'),
					require('./lo2.jpg'),
					require('./lo3.jpg'),
					require('./lo4.jpg'),
					require('./lo5.jpg'),
					require('./lo6.jpg'),
					require('./lo7.jpg'),
					require('./lo8.jpg'),
				],
				isFixed : false
			}
		},
		computed:{
			state(){return this.$store.state.category.data;}
		},
		created(){
			//命令vuex仓库去拿数据了
			this.$store.dispatch('category/getCategory');
		}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
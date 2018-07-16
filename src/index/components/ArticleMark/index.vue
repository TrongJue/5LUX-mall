<template>
    <div id="app">
            <strong v-text="titles[i]"></strong>
            <p v-text="texts[i]"></p>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		props:{
			i:Number
		},
		data(){
			return {
				titles:[
					'OL穿搭有术 工作照样美',
                    '澳洲拟再度收紧移民政策，申请PR以后或等九年',
                    'CEMOY 安瓶——带你飞升上仙~',
                    '夸张的耳饰让你的造型更加精致',
				],
                texts:[
                    '最近大热韩剧《金秘书怎么了》中的女主小姐姐甜美微笑，干练的职业装真的很吸引人，学职场穿搭，解救女生夏日通勤穿搭难题，Saint James海魂衫低至￥578',
                    '据重磅消息称：执政党联盟党正考虑出台签证新政策，为所有PR申请人增设强制等待期，以节约资金！而且，在强制等待期间，申请人无法享受完整福利待遇！',
                    '保持美丽是女性朋友们为之疯狂的终极目标，随着各种种草产品的产生，我们的护肤步骤也是越来越多，但是小仙女们都在不厌其烦的进行着。敷面膜、擦水乳、精华液、日霜面霜还有隔离防晒等等。因为大家都十分了解，好的',
                    '一身简约的搭配比较需要用配饰来增添亮点，除了包包和鞋子之外首饰也是不错的选择，略微夸张的耳饰不仅可以修饰脸型，也能让整体造型更加精致。',
                    
                    
                ]
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        width:90vw
        margin:0 5vw
        padding:20px 0
        border-bottom:1px solid #aaa
        strong
            display:inline-block
            padding-bottom:15px
            font-size:14px
        p
            overflow: hidden;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            color:#999
            font-size:12px
        
</style>
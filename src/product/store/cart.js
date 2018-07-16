'use strict';
import _ from 'lodash';
import axios from 'axios';
export default {
	namespaced:true,
	state:{
		data: null,
		// goods: null
	},
	getters:{},
	mutations:{
		_updateData(state,payload){
			state.data = payload;
		},
		_updatePro(state,payload){
		state.data = payload;
		}
	},
	actions:{
		// 根据商品分类获取商品信息
		getCartList(context,count){

			axios.post(context.rootState.ip + '/cart',count)
				.then(result => {context.commit('_updateData',result.data[0]);console.log(result.data[0]);})
				.catch(err => console.log(err))
		},
		getCartPro(context,count){
			axios.post(context.rootState.ip + '/cart/pro',count)
				.then(result => {context.commit('_updatePro',result.data);console.log(result.data);})
				.catch(err => console.log(err))
		},
		// 解构
		updateCart(context,{pid,flag}){
			//深复制
			var temp = _.cloneDeep(context.state.data);
			//数据元素查找
			var target = _.find(temp.detail,function(item){
				return item.pid === pid;
			});
			if(typeof target === 'undefined')
				temp.detail.push({pid:pid,num:1,date:new Date()})
			else
				target.num= flag?target.num+1:target.num-1;
			
			axios.post(context.rootState.ip+'/cart/update',temp)
				.then(result => {
					if(result.data === 1)
						context.commit('_updateData',temp);
					else
						alert('连接服务器失败..');
				})
				.catch(err => alert(err));
		}
	}
}
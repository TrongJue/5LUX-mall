import axios from 'axios';
export default{
	namespaced: true,
	state:{
		data:null,
		curid:0//
	},
	getters: {
		getDetialList(state){
			return state.list.filter(item => item.pid === 0);
		},
		subDetialList(state){
			return state.list.filter(item => item.pid === state.curid);
		},
	},
	mutations: {
		updateCategory(state,payload){
			state.data = payload;
		}
	},
	actions:{
		getCategory(context){
			axios.post('http://localhost:3000/category')
				.then(function(result){
					context.commit('updateCategory',result.data);
					console.log(result.data);
				})
				.catch(function(err){
					console.log(err);
				});
		}
	}
	
};
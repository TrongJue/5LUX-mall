import axios from 'axios';
export default{
	namespaced: true,
	state:{
		data:null,
		kindiIndex:0,
		kindjIndex:0
	},
	getters: {},
	mutations: {
		updateProduct(state,payload){
			state.data = payload;
		}
	},
	actions:{
		getProduct(context,proId){
			axios.post('http://localhost:3000/product/item',{proId:proId})
				.then(function(result){
					context.commit('updateProduct',result.data[0]);
					console.log(result.data);
				})
				.catch(function(err){
					console.log(err);
				});
		}
	}
	
};
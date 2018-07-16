import axios from 'axios';
export default{
	namespaced: true,
	state:{
		data:null
	},
	getters: {},
	mutations: {
		updateProduct(state,payload){
			state.data = payload;
		}
	},
	actions:{
		getProduct(context){
			axios.post('http://localhost:3000/product/all')
				.then(function(result){
					context.commit('updateProduct',result.data);
					console.log(result.data);
				})
				.catch(function(err){
					console.log(err);
				});
		}
	}
	
};
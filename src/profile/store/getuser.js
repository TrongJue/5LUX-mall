import axios from 'axios';
export default{
	namespaced: true,
	state:{
		data:null,
		// curid:0//
	},
	getters: {
	
	},
	mutations: {
		updateuser(state,payload){
			state.data = payload;
		}
	},
	actions:{
		getuser(context){
			axios.post('http://localhost:3000/profile')
				.then(function(result){
					context.commit('updateuser',result.data);
					console.log(result.data);
				})
				.catch(function(err){
					console.log(err);
				});
		}
	}
	
};
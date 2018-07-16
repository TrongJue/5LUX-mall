import Vue from 'vue';
import Vuex from 'vuex';
import getuser from './getuser.js';
import product from './product.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		// url:'http://localhost:3000'
	},
	modules:{
		getuser,
		product
	}
});
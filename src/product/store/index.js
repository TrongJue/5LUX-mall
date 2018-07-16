import Vue from 'vue';
import Vuex from 'vuex';
import category from './category.js';
import product from './product.js';
import cart from './cart.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		ip:'http://localhost:3000'
	},
	modules:{
		category,
		product,
		cart
	}
});
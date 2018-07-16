import Vue from 'vue';
import Router from 'vue-router';
import MyOrder from '../components/MyOrder';


Vue.use(Router);

export default new Router({
	routes:[
		{
			path:'/MyOrder',
			component:MyOrder
		},
	]
})
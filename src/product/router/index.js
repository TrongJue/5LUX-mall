import Vue from 'vue';
import Router from 'vue-router';
import CartDialog from '../components/CartDialog';
import ShopCart from '../../components/ShopCart';
import ReferOrder from '../components/ReferOrder';
import ToPay from '../components/ToPay';

Vue.use(Router);

export default new Router({
	routes:[
		{
			path:'/CartDialog',
			component:CartDialog
		},
		{
			path:'/ShopCart',
			component:ShopCart
		},
		{
			path:'/ReferOrder',
			component:ReferOrder
		},
		{
			path:'/ToPay',
			component:ToPay
		},
	]
})
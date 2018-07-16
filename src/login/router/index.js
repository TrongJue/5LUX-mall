import Vue from 'vue';
import Router from 'vue-router';
import PasswordLogin from '../components/PasswordLogin';
import MessageLogin from '../components/MessageLogin';
import Register from '../components/Register';

Vue.use(Router);

export default new Router({
	routes:[
		{
			path:'/PasswordLogin',
			component:PasswordLogin
		},
		{
			path:'/MessageLogin',
			component:MessageLogin
		},
		{
			path:'/Register',
			component:Register
		},
		{
			path:'/',
			redirect:'/MessageLogin'
		}
	]
})
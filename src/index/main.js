import Vue from 'vue';
import App from './App';
import store from './store';
// import router from './router';

import '../common/css/reset.styl';

var vm = new Vue ({
	el: '#app',
	store,
	// router,
	components: {App},
	template: '<App />'
});
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import A from './A'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
  	base: __dirname,
	routes: [
		{path: '/index', component: A},
		{path: '*', redirect: '/index'}
	]
});



new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import Index from './Index'

Vue.config.debug = true;

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint)

const First = {
	template: '<div><h2>我是第一个子页面</h2></div>'
}

import secondcomponent from './components/second-component';
import coming from './components/coming';
import good from './components/good';
import top250 from './components/top250';
import detail from './components/detail';
import hello from './components/Hello';

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [{
		path: '/',
		component: App,
		children: [
			{
				path: 'coming',
				component: coming
			},{
				path: 'good',
				component: good
			},{
				path: 'top250',
				component: top250
			},{
				path: '',
				component: hello
			}
		]
	},{
		name: 'detail',
		path: '/detail/:id',
		component: detail
	}]
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

const app = new Vue({
	router: router,
	render: h => h(Index)
}).$mount('#app');

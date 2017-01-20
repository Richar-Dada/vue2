// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'


Vue.use(VueRouter)


import Home from './components/Home'
import List from './components/List'
import CreatNews from './components/CreatNews'
import EditNews from './components/EditNews'


const routes = [
  {
  	path: '/',
  	component: Home
  },
	{
		path: '/home',
		component: Home
	},
	{
		path: '/list',
		component: List
	},
	{
		path: '/creat',
		component: CreatNews
	},
	{
		path: '/edit',
		component: EditNews
	},
	{
		path: '*',
		redirect: '/'
	}

];

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routes
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

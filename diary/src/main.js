// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import './config/rem'
import VueI18n from 'vue-i18n'
import locales from './config/i18n/'


Vue.use(VueRouter)
Vue.use(VueI18n)

Vue.config.lang = 'zh'

Object.keys(locales).forEach(function(lang){
	Vue.locale(lang, locales[lang])
})


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
		name: 'edit',
		path: '/edit/:id',
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

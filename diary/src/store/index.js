import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
	list: [{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	},{
		'content': '中途休息,吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常'
	},{
		'content': '无聊,又吃了一个鸡蛋',
		'date': '2017-1.23',
		'title': '文文日常2'
	},{
		'content': '不开心,吃个鸡蛋压压惊',
		'date': '2017-1.23',
		'title': '文文日常3'
	}],
	activeIndex: '0'
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})


import * as types from './mutation-type'

export default {
	[types.ADD_NEWS](state, news){
		state.list.push(news);
	},
	[types.DELETE_NEWS](state, idx){
		state.list.splice(idx, 1);
	},
	[types.UPDATE_NEWS](state, news){
		state.list[state.activeIndex] = news;
	},
	[types.GET_ACTIVE_NEWS](state, idx){
		return state.list[idx];
	},
	[types.SET_ACTIVE_NEWS](state, idx){
		return state.activeIndex = idx;
	}
}
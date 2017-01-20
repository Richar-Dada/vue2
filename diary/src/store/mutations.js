import * as types from './mutation-type'

export default {
	[types.ADD_NEWS](state, news){
		state.list.push(news);
	},
	[types.DELETE_NEWS](state, idx){
		state.list.splice(idx, 1);
	},
	[types.UPDATE_NEWS](state, idx, news){
		state.list[idx] = news;
	}
}
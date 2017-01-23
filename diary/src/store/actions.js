import * as types from './mutation-type'

export default {
	addNews({ commit }, news){
		commit(types.ADD_NEWS, news)
	},
	deleteNews({ commit }, idx){
		commit(types.DELETE_NEWS, idx)
	},
	updateNews({ commit }, news){
		commit(types.UPDATE_NEWS, news)
	},
	getActiveNews({ commit }, idx){
		commit(types.GET_ACTIVE_NEWS, idx)
	},
	setActiveNews({ commit }, idx){
		commit(types.SET_ACTIVE_NEWS, idx)
	}
}
import * as types from './mutation-type'

export default {
	addNews({ commit }, news){
		commit(types.ADD_NEWS, news)
	},
	deleteNews({ commit }, idx){
		commit(types.DELETE_NEWS, idx)
	},
	updateNews({ commit }, idx, news){
		commit(types.UPDATE_NEWS, idx, news)
	}
}
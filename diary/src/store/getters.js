export default {
	getActiveNews (state) {
		return state.list[state.activeIndex];
	},
	getNewestNews(state){
		return state.list[0];
	}
}
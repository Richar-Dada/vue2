<template>
  <div id="home">
		<x-header :left-options="{showBack: false}">dada糖手记</x-header>
		<swiper :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></swiper>
  </div>
</template>

<script>
  import XHeader from 'vux/src/components/x-header'
  import { Swiper } from 'vux/src/components/swiper'

  const imgList = [
	  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
	  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
	  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
	]

	const demoList = imgList.map((one, index) => ({
		url: 'javascript:',
		img: one
	}))

  export default {
	  data() {
		  return {
		  	demo01_list: demoList,
		  	demo02_index: 1
		  }
	  },
	  components: {
	  	XHeader,
	  	Swiper
	  },
	  methods: {
	  	demo01_onIndexChange: function(index){
	  		this.demo01_index = index;
	  	}
	  }
  }
</script>
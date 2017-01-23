<template>
  <div id="home">
		<x-header :left-options="{showBack: false}" ><a slot="left" @click="checkList">手记列表</a>{{ $t("index-title") }} <a slot="right" @click="creatNews">{{ $t("write-news") }}</a></x-header>
		<swiper :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></swiper>
		<div class="newest-item">
			<h2>最新手记</h2>
			<h4>{{ newestNews.title }}</h4>
			<p>{{  newestNews.content }}</p>
		</div>
  </div>
</template>

<script>
  import XHeader from 'vux/src/components/x-header'
  import Swiper from 'vux/src/components/swiper/swiper.vue'


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
	  	},
	  	creatNews: function(){
	  		this.$router.push('/creat');
	  	},
	  	checkList: function(){
	  		this.$router.push('/list');
	  	}
	  },
	  computed: {
	  	newestNews () {
	  		return this.$store.getters.getNewestNews;
	  	} 
	  }
  }
</script>

<style lang="scss">
	.newest-item{
		padding: 0 10px;
	}

</style>
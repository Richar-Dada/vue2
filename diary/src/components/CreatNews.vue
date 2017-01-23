<template>
  <div id="creat-news">
		<x-header >写手记</x-header>
		<group class="create-news-area">
	      <x-input placeholder="标题" v-model="newsTitle"></x-input>
	      <x-textarea :max="400" name="description" placeholder="描述" v-model="newsContent"></x-textarea>
	    </group>
	    <x-button type="primary" class="complete-btn" @click.native="save">完成</x-button>
  </div>
</template>

<script>
	import XHeader from 'vux/src/components/x-header'
	import { XTextarea, Group, XInput } from 'vux'
	import XButton from 'vux/src/components/x-button'
	import Autosize from 'autosize'

	export default {
	  data() {
		  return {
		  	newsTitle: '',
		  	newsContent: ''
		  }
	  },
	  components: {
	  	XHeader,
	  	XTextarea,
	  	Group,
	  	XInput,
	  	XButton
	  },
	  methods: {
	  	save () {
	  		const news = {
	  			title: this.newsTitle,
	  			content: this.newsContent,
	  			date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
	  		};
	  		if(news.title === '' || news.content === ''){
	  			alert('内容不完整,无法保存');
	  			return;
	  		}
	  		this.$store.dispatch('addNews',news);
	  		this.$router.push('/list');
	  	}
	  }
	 
	}
</script>

<style lang="scss">
	.create-news-area{
		margin-top:-20px;
	}
	.complete-btn{
		width: 94%!important;
		margin: 10px auto;
	}
</style>
<template>
  <div id="edit-news">
		<x-header >修改手记</x-header>
		<group class="create-news-area">
	      <x-input placeholder="标题" v-model="activeNews.title"></x-input>
	      <x-textarea :max="400" name="description" placeholder="描述" v-model="activeNews.content"></x-textarea>
	    </group>
	    <x-button type="primary" class="complete-btn" @click.native="save">修改</x-button>
  </div>
</template>

<script>
	import XHeader from 'vux/src/components/x-header'
	import { Group, XInput, XTextarea, XButton } from 'vux'


	export default {
	  data() {
		  return {
		  		
		  }
	  },
	  components: {
	  	XHeader,
	  	Group,
	  	XInput,
	  	XTextarea,
	  	XButton
	  },
	  computed: {
	  	activeNews () {
			return this.$store.getters.getActiveNews;
	  	}
	  },
	  methods: {
	  	save: function(){
	  		this.$store.dispatch('updateNews', this.activeNews);
	  		this.$router.push('/list');
	  	}
	  }
	}
</script>
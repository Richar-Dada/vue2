<template>
  <div id="list">
		<x-header >手记列表</x-header>
		<flexbox orient="vertical">
			<flexbox-item class="list-item" v-for="(item, index) in allNews" :key="item.id">
				<span class="title">{{ item.title }}</span>
				<span class="date">{{ item.date }}</span>
				<p>{{ item.content }}</p>
				<x-button type="warn" mini class="edit-button" @click.native="editNews(index)" >修改</x-button>	
			</flexbox-item>
		</flexbox>
		
  </div>
</template>

<script>
	import XHeader from 'vux/src/components/x-header'
	import { Flexbox, FlexboxItem, XButton } from 'vux'

	export default {
		data() {
		  return {

		  	}
		},
		components: {
			XHeader,
			Flexbox,
    		FlexboxItem,
    		XButton
		},
		computed: {
			allNews () {
				return this.$store.state.list;
			}
		},
		methods: {
			editNews: function(index){
				this.$store.dispatch('setActiveNews', index);
				this.$router.push({ name: 'edit' , params: { id: index }})
			}
		}
	}
</script>

<style lang="scss">
	.newsList{
		margin-top:0px!important; 

	}
	.list-item{
		border-bottom: 2px solid #666;
		padding: 0 10px;
		position: relative;
		.title{
			left: 0;
		}
		.date{
			right: 0;
			float: right;
		}
		span{
			color: #999;
			position: relative;
			
		}
		p{
			margin: 0;
			height: 40px;
			width: 100%;
			word-wrap: break-word;
		}
		.edit-button{
			position: absolute;
			right: 20px;
			bottom: 10px;
		}
	}
</style>
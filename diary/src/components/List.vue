<template>
  <div id="list">
		<x-header >手记列表</x-header>
		<flexbox>
			<flexbox-item class="list-item" v-for="item in allNews">
				<span class="title">{{ item.title }}</span>
				<span class="date">{{ item.date }}</span>
				<p>{{ item.content }}</p>
			</flexbox-item>
		</flexbox>
		
  </div>
</template>

<script>
	import XHeader from 'vux/src/components/x-header'
	import { Flexbox, FlexboxItem } from 'vux'

	export default {
		data() {
		  return {

		  	}
		},
		components: {
			XHeader,
			Flexbox,
    		FlexboxItem
		},
		computed: {
			allNews () {
				return this.$store.state.list;
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
	}
</style>
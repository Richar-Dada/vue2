<template>
	<div id="top250">
		<mt-tab-container-item class="list">
			<mt-cell v-for="article in articles" class="list-item">
				<router-link :to="{name: 'detail', params: { id: article.id }}">
					{{ article.title }}
				</router-link>
			</mt-cell>
		</mt-tab-container-item>
	</div>
</template>


<script>
	export default {
		data () {
			return {
				author: '里查德森',
				articles: []
			}
		},
		mounted: function(){
			this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
				headers: {

				},
				emulateJSON: true,
			}).then(function(response){
				this.articles = response.data.subjects;
			},function(reject){
				console.log(response);
			})
		}
	}
</script>

<style lang="less" >
	.list{
		.list-item{
			a{
				text-decoration: none;
			}
		}
	}
</style>
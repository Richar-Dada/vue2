<template>
	<div id="top250">
		<ul>
			<li v-for="article in articles">
				{{article.title}}
			</li>
		</ul>
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

<style>
	
</style>
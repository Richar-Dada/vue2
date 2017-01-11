<template>
    <div id="detail">
        ddd
    </div>
</template>

<script>
    export default {
        data () {
            return {
                item: ''
            }
        },
        mounted: function(){
			this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=10',{},{
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
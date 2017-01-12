<template>
    <div id="detail">
        <ul>
            <li>{{item.id}}</li>
            <li>{{item.title}}</li>
            <li><img :src="item.images" alt=""></li>
            <li>{{item.countries}}</li>
            <li>{{item.summary}}</li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                item: {}
            }
        },
        mounted: function(){
			this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+ this.$route.params.id,{},{
				headers: {

				},
				emulateJSON: true,
			}).then(function(response){
				this.item = response.data;
                console.log(this.item);
			},function(reject){
				console.log(response);
			})
		}
    }
</script>
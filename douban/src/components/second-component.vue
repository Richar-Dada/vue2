<template>
	<div id="secondcomponent">
		<h1>I am second component</h1>
		<a>written by {{author}}</a>
		<p>感谢大家的指导</p>
	</div>
</template>


<script>
	export default {
		data () {
			return {
				author: '里查德森',
				articles: []
			}
		}
	}
</script>

<style>
	
</style>
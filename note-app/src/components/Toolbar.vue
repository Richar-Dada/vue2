<template>
	<div id="toolbar">
		<i class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30"></i>
		<i @click="newNote" class="glyphicon glyphicon-plus"></i>
		<i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
		<i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
	</div>
</template>

<script>
	import { newNote, deleteNote, toggleFavorite } from '../vuex/actions';
	import { activeNote } from '../vuex/getters';

	export default {
		vuex: {
			getters: {
				activeNote
			},
			actions: {
				newNote,
				deleteNote,
				toggleFavorite
			}
		}

	}

</script>

<style>
	
</style>
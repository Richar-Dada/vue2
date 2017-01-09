<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Hello from './components/Hello';
import Toolbar from './components/Toolbar';
import NotesList from './components/NotesList';
import Editor from './components/Editor';
import store from './vuex/store';
import { initStore } from './vuex/actions';

export default {
  name: 'app',
  components: {
    Hello,
    Toolbar,
    NotesList,
    Editor
  },
  store,
  vuex: {
    actions: {
      initStore
    }
  },
  ready(){
    this.initStore();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul class="menu">
      <li>
        <router-link to="/good">正在上映</router-link>
      </li>
      <li>
        <router-link to="/coming">即将上映</router-link>
      </li>
      <li>
        <router-link to="/top250">TOP250</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import firstComponent from './components/first-component';
import coming from './components/coming';
import good from './components/good';
import top250 from './components/top250';

export default {
  data(){
    return {
      msg: '豆瓣电影'
    }
  },
  components: {
    firstComponent,
    coming,
    good,
    top250
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

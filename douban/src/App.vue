<template>
  <div id="app">
    <mt-header :title="msg" class="header"></mt-header>
    <!-- <ul class="menu">
      <li>
        <router-link to="/good">正在上映</router-link>
      </li>
      <li>
        <router-link to="/coming">即将上映</router-link>
      </li>
      <li>
        <router-link to="/top250">TOP250</router-link>
      </li>
    </ul> -->
    <mt-navbar v-model="selected" class="menu">
      <mt-tab-item id="1">
        <router-link to="/good">正在上映</router-link>
      </mt-tab-item>
      <mt-tab-item id="2">
        <router-link to="/coming">即将上映</router-link>
      </mt-tab-item>
      <mt-tab-item id="3">
        <router-link to="/top250">TOP250</router-link>
      </mt-tab-item>  
    </mt-navbar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import firstComponent from './components/first-component';
import coming from './components/coming';
import good from './components/good';
import top250 from './components/top250';
import { Header } from 'mint-ui';
import { Navbar } from 'mint-ui';



export default {
  data(){
    return {
      msg: '豆瓣电影',
      selected: true
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

<style lang="less" >
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
  background-color: #26a2ff;
  color: #fff;
  font-size: 16px;
}
.menu{
  background-color: #666;
  a{
    text-decoration: none;
    color: #fff;
  }
}
</style>

<template>
  <router-view></router-view>
</template>

<script>
import Hello from './components/Hello'

export default {
name: 'app',
components: {
  Hello
}
}
</script>

<style>

body{
  margin: 0;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '嘿嘿嘿'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  background-color:#26a2ff;
  margin: 150px auto;
  border-radius: 100%;
  color: #fff;
}
</style>


<template>
  <div id="app">
    <ComHeader />  <!-- Sử dụng ComHeader tại đây -->
    <router-view /> <!-- Nơi hiển thị các route -->
    <ComHome /> 
    <ComFooter />   <!-- Sử dụng ComFooter tại đây -->
  </div>
</template>
<script>
// b1: import vào

import ComHeader from './components/ComHeader.vue'
import ComHome from './components/ComHome.vue';
import ComFooter from './components/ComFooter.vue'
export default {
  name: 'App',
  components: {

    ComHeader,
    ComHome,
    ComFooter,
 
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

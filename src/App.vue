<template>
  <div id="app">
    <ComHeader @open-login="showLoginModal" @open-register="showRegisterModal" />
    <router-view /> <!-- Đảm bảo có router-view ở đây -->
    <ComFooter />
    <ComLogin v-if="isLoginModalVisible" @close="isLoginModalVisible = false" />
    <ComRegister v-if="isRegisterModalVisible" @close="isRegisterModalVisible = false" />
  </div>
</template>

<script>
import ComHeader from './components/ComHeader.vue';
import ComFooter from './components/ComFooter.vue';
import ComLogin from './components/ComLogin.vue';
import ComRegister from './components/ComRegister.vue';

export default {
  name: 'App',
  components: {
    ComHeader,
    ComFooter,
    ComLogin,
    ComRegister,
  },
  data() {
    return {
      isLoginModalVisible: false,
      isRegisterModalVisible: false, 
    };
  },
  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true; 
    },
    showRegisterModal() {
      this.isRegisterModalVisible = true;
    },
  },
};
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

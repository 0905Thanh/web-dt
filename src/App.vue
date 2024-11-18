<!-- App -->
<template>
  <div id="app">
    <ComHeader @open-login="showLoginModal" @open-register="showRegisterModal" />
    <router-view /> <!-- Đảm bảo có router-view ở đây -->
    <ComHome />
    <ComFooter />
    <ComLogin v-if="isLoginModalVisible" @close="isLoginModalVisible = false" />
    <ComRegister v-if="isRegisterModalVisible" @close="isRegisterModalVisible = false" />
  </div>
</template>

<script>
import ComHeader from './components/ComHeader.vue';
import ComFooter from './components/ComFooter.vue';
import ComHome from './components/ComHome.vue';
import ComLogin from './components/ComLogin.vue';
import ComRegister from './components/ComRegister.vue';

// import eventBus from './eventBus'; // Import event bus

export default {
  name: 'App',
  components: {
    ComHeader,
    ComHome,
    ComFooter,
    ComLogin,
    ComRegister
  },
  data() {
    return {
      isLoginModalVisible: false, // Trạng thái hiển thị modal login
      isRegisterModalVisible: false // Trạng thái hiển thị modal register
    };
  },
  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true; // Mở modal login
    },
    showRegisterModal() {
      this.isRegisterModalVisible = true; // Mở modal register
    },
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
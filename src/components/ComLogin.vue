<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Đăng nhập</h2>
      <input v-model="username" placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <button @click="login">Đăng nhập</button>
      <p v-if="error">{{ error }}</p>
      <button class="close-btn" @click="closeModal">Đóng</button>
    </div>
  </div>
</template>

<script>
import users from '@/data/users';
import eventBus from '@/eventBus';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
      users: users,
    };
  },
  methods: {
    login() {
      // Tìm user và pass có trong database tên là users
      const user = this.users.find(
        (x) => x.username === this.username && x.password === this.password
      );
      if (user) {
        // Lưu vào localStorage
        localStorage.setItem('currentuser', JSON.stringify(user));
        eventBus.emit('loginSuccess', user);
        this.$router.push('/');
      } else {
        this.error = 'Đăng nhập không thành công';
      }
    },
    closeModal() {
      this.$emit('close'); // Gửi sự kiện đóng modal lên App.vue
      this.$router.push('/'); // Điều hướng đến trang chủ
    },
  },
};
</script>

<style>
/* Giao diện Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 10px;
}

.close-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.close-btn:hover {
  background-color: #d32f2f;
}
</style>

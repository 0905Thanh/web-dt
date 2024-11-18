<!-- ComRegister -->
<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Đăng ký tài khoản</h2>
      <input v-model="username" placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Xác nhận mật khẩu"
      />
      <button @click="register">Đăng ký</button>
      <p v-if="error" class="error">{{ error }}</p>
      <!-- Nút Đóng -->
      <button class="close-btn" @click="closeModal">Đóng</button>
    </div>
  </div>
</template>

<script>
import users from '@/data/users';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      error: '',
      users: users,
    };
  },
  methods: {
    register() {
      // Kiểm tra mật khẩu trùng khớp
      if (this.password !== this.confirmPassword) {
        this.error = 'Mật khẩu không trùng';
        return;
      }
      // Kiểm tra username đã tồn tại chưa
      const existingUser = this.users.find((x) => x.username === this.username);
      if (existingUser) {
        this.error = 'Tên đã tồn tại';
        return;
      }
      // Tạo người dùng mới
      const newUser = {
        id: this.users.length + 1,
        username: this.username,
        password: this.password,
      };
      this.users.push(newUser);

      // Lưu vào localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));

      alert('Đăng ký thành công');
      this.error = '';
      this.username = '';
      this.password = '';
      this.confirmPassword = '';
      this.$router.push('/login'); // Điều hướng đến trang đăng nhập
    },
    closeModal() {
      this.$emit('close'); // Gửi sự kiện đóng modal lên App.vue
      this.$router.push('/'); // Điều hướng đến trang chủ
    },
  },
};
</script>

<style scoped>
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

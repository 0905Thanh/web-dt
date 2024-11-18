<template>
    <div>
      <h2>Đăng nhập</h2>
      <input v-model="username"  placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <button @click="login">Đăng nhập</button>
      <p v-if="error">{{error}}</p>
    </div>
  </template>
  
  <script>
  import users from '@/data/users'
  import eventBus from '@/eventBus'
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: '',
        users:users
      };
    },
    methods:{
      login()
      {
        // tìm user và pass có trong database tên là users
        const user=this.users.find(x=>x.username===this.username && x.password===this.password)
        if(user)
        {
          // lưu vào localStorage
          localStorage.setItem('currentuser',JSON.stringify(user))
          eventBus.emit('loginSuccess',user)
          this.$router.push('/')
        }
        else
        {
          this.error="Đăng nhập không thành công";
        }
      }
    }
  };
  </script>
  
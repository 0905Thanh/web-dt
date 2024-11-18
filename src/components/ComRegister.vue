<template>
    <div>
      <h2>Đăng ký tài khoản</h2>
      <input v-model="username" placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Xác nhận mật khẩu"
      />
      <button @click="register">Đăng ký</button>
      <p v-if="error" class="error">{{error}}</p>
      
    </div>
  </template>
  
  <script>
  import users from '@/data/users'
  export default {
    data() {
      return {
        username: "",//an
        password: "",//123
        confirmPassword: "",//123
        error: "",
      //   success: "",
        users:users
      };
    },
    methods:{
      register()
      {
          // trường hợp mật khẩu và nhập lại mật khẩu ko đúng
          if(this.password!==this.confirmPassword)
          {
              this.error="Mật khẩu không trùng"
              return
          }
          // nếu như trùng
          // kiểm tra danh sách người dùng có từ localStorage hay không
          const users=JSON.parse(localStorage.getItem('users'))||null
          // kiem tra xem trong database có tên đó hay chưa
          const exituser=this.users.find(x=>x.username===this.username)
          if(exituser)
          {
              this.error="Tên đã có"
              return
          }
          // tạo đối tượng mới
          const newuser={id:this.users.length+1,username:this.username,password:this.password}
          this.users.push(newuser)
          // luu users vào localStore
          localStorage.setItem('users',JSON.stringify(users))
          alert('Đăng ký thành công')
          // điều hướng nhanh this.$router.push(path)
          this.error=''
          this.username=''
          this.password=''
          this.confirmPassword=''
          this.$router.push('/login')
      }
    }
  };
  </script>
  
  <style>
  </style>
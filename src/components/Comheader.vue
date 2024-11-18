<template>
  <header>
         <div class="container">
             <div class="logo">
                 <img src="@/assets/quanao/logomixi.png" alt="Logo Mixi">
             </div>
             <nav>
                 <ul>
                     <li><router-link to="/">Trang Chủ</router-link></li>
                     <li><router-link to="/gioithieu">Giới Thiệu</router-link></li>
                     <li><router-link to="/lienhe">Liên Hệ </router-link></li>
                     <li><router-link to="/tintuc">Tin Tức </router-link></li>
                     <li><router-link to="/register">Đăng Ký </router-link></li>
                     <li><router-link to="/login">Đăng Nhập </router-link></li>
                 </ul>
             </nav>
             <div v-if="user">
                 <p>Xin chào,{{user.username}}</p>
                 <button @click="logout">Đăng xuất</button>
             </div>
             <div class="cta">
                 <router-link to="/cart" class="cta-button">Giỏ Hàng</router-link>
             </div>
         </div>
     </header>
  <!-- lấy nội dung component được link tới thì dùng -->
  <router-view/>
 </template>
 
 <script>
 import eventBus from '@/eventBus'
 export default {
     data()
     {
         return{
             user:JSON.parse(localStorage.getItem('currentuser'))||null
         }
     },
     created()
     {
         eventBus.on('loginSuccess',(user)=>{
             this.user=user
         })
     },
     beforeUnmount()
     {
         // gỡ bỏ lắng nghe sự kiện khi component bị hủy
         eventBus.off('loginSuccess')
     },
     methods:{
         logout()
         {
             localStorage.removeItem('currentuser')
             this.user=null
             this.$$router.push('/')
         }
     }
 }
 </script>
 
 <style>
 .container {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 20px;
     background-color: #fff;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
 }
 
 .logo img {
     height: 50px;
     transition: transform 0.3s ease;
 }
 
 /* .logo img:hover {
     transform: scale(1.1);
 } */
 
 nav ul {
     list-style: none;
     display: flex;
     margin: 0;
     padding: 0;
 }
 
 nav ul li {
     margin: 0 15px;
 }
 
 nav ul li a {
     text-decoration: none;
     color: #000;
     font-weight: bold;
     transition: color 0.3s ease;
 }
 
 nav ul li a:hover {
     color: #fcb034;
 }
 .cta-button {
     padding: 10px 20px;
     background-color: #fcb034;
     color: #fff;
     text-decoration: none;
     border-radius: 25px;
     transition: background-color 0.3s ease, transform 0.3s ease;
 }
 
 .cta-button:hover {
     background-color: #ffa726;
     transform: scale(1.1);
 }
 </style>
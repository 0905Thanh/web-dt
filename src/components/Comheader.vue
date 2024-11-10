<template>
    <header>
      <div class="container">
        <div class="logo">
          <img src="/Images/logo.png" alt="Phone Store Logo">
        </div>
        <nav>
          <ul>
            <li><router-link to="/">Trang Chủ</router-link></li>
            <li><router-link to="/dienthoai">Điện Thoại</router-link></li>
            <li><router-link to="/khuyenmai">Khuyến Mãi</router-link></li>
            <li><router-link to="/gioithieu">Giới Thiệu</router-link></li>
            <li><router-link to="/lienhe">Liên Hệ</router-link></li>
          </ul>
        </nav>
        <div class="cta">
          <router-link to="/cart" class="cta-button">Giỏ Hàng</router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'ComHeader',
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
  }
  
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
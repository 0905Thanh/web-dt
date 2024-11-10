<template>
    <div>
      <h1>TẤT CẢ SẢN PHẨM</h1>
      <div class="product-list">
        <Product v-for="item in products" :key="item.id" :product="item" />
      </div>
    </div>
  </template>
  
  <script>
  import Product from './ComProduct.vue';
  import items from '../data/items'; // Đảm bảo đường dẫn này đúng
  
  export default {
    name: 'ComHome',
    components: {
      Product,
    },
    data() {
      return {
        products: items,
      };
    },
  };
  </script>
  
  <style>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
<template>
  <div class="menu-item">
    <img :src="product.image" alt="Product Image" v-if="product.image">
    <div class="menu-item-info">
      <h3>{{ product.name }}</h3>
      <p>{{ formatPrice(product.price) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(price);
    }
  }
}
</script>

<style>
.menu-item {
  flex: 0 1 23%; /* Điều chỉnh kích thước sản phẩm */
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.menu-item img {
  width: 100%;
  height: auto; /* Đảm bảo hình ảnh tự động điều chỉnh chiều cao */
}
.menu-item-info {
  text-align: center;
  padding: 10px;
}
</style>
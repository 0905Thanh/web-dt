<!-- ComHome -->
<template>
  <div>
    <h1>TẤT CẢ SẢN PHẨM</h1>
    <h2 class="menu-title">Khám Phá Sản Phẩm Của Chúng Tôi</h2>
    <div class="product-list">
      <Product 
        v-for="item in products" 
        :key="item.id" 
        :product="item" 
      />
    </div>
  </div>
</template>

<script>
import Product from './ComProduct.vue'; // Đảm bảo import đúng component
import items from '../data/items'; // Đảm bảo đường dẫn này đúng
import eventBus from '../eventBus';

export default {
  name: 'ComHome',
  components: {
    Product,
  },
  data() {
    return {
      products: items, // Danh sách sản phẩm
    };
  },
  computed: {
    uniqueProducts() {
      const seen = new Set();
      return this.products.filter(product => {
        const duplicate = seen.has(product.id);
        seen.add(product.id);
        return !duplicate;
      });
    },
  },
  methods: {
    addToCart() {
      eventBus.emit('add-to-cart', this.product.id); // Gửi sự kiện với ID sản phẩm
    },
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

.menu-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
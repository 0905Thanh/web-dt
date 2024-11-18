<!-- ComHome -->
<template>
  <div>
    <h1>TẤT CẢ SẢN PHẨM</h1>
    <h2 class="menu-title">Khám Phá Sản Phẩm Của Chúng Tôi</h2>
    <div class="product-list">
      <Product
        v-for="product in currentProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="pagination">
      <button @click="changepage(currentpage - 1)" :disabled="currentpage === 1">
        Trang trước
      </button>
      <span>Trang {{ currentpage }} / {{ totalpages }}</span>
      <button @click="changepage(currentpage + 1)" :disabled="currentpage >= totalpages">
        Trang tiếp theo
      </button>
    </div>
  </div>
</template>

<script>
import Product from './ComProduct.vue';
import items from '../data/items'; // Giả sử items là danh sách sản phẩm

export default {
  name: 'ComHome',
  components: {
    Product,
  },
  data() {
    return {
      products: items, // Danh sách sản phẩm (có thể có hơn 100 sản phẩm)
      currentpage: 1,
      limit: 8, // Số sản phẩm hiển thị trên mỗi trang
    };
  },
  computed: {
    currentProducts() {
      const start = (this.currentpage - 1) * this.limit;
      const end = start + this.limit;
      return this.products.slice(start, end);
    },
    totalpages() {
      return Math.ceil(this.products.length / this.limit);
    },
  },
  methods: {
    changepage(page) {
      if (page < 1 || page > this.totalpages) return; // Đảm bảo trang hợp lệ
      this.currentpage = page;
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

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
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
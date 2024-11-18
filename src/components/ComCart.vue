<!-- ComCart -->
<template>
  <div v-if="cart.length === 0">
    <p>Giỏ hàng chưa có hàng</p>
  </div>
  <div v-else>
    <table style="width: 100%" class="text-center table">
      <thead>
        <tr>
          <th>HÌNH</th>
          <th>SẢN PHẨM</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Tiền</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td><img :src="item.image" style="height: 100px; width: 100px" /></td>
          <td class="align-middle">{{ item.name }}</td>
          <td class="align-middle">{{ item.price }}</td>
          <td class="align-middle">
            <button @click="decreaseQuantity(item)">-</button>
            {{ item.quantity }}
            <button 
              @click="increaseQuantity(item)" 
              :disabled="item.quantity >= getMaxQuantity(item.id)">
              +
            </button>
          </td>
          <td class="align-middle">{{ item.price * item.quantity }}</td>
          <td class="align-middle">
            <button class="btn btn-danger" @click="deleteproduct(item)">Remove 1</button>
          </td>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>Tổng tiền</th>
          <th>{{ tongsoluong }}</th>
          <th>{{ tongtien }}</th>
          <th><button class="btn btn-danger" @click="xoahet()">Xóa hết</button></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import cart from "../data/cart";
import items from "@/data/items"; // Import để tham chiếu số lượng tối đa
import eventBus from "@/eventBus";

export default {
  data() {
    return {
      cart: cart,
    };
  },
  computed: {
    tongtien() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    tongsoluong() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
  },
  methods: {
    increaseQuantity(item) {
      // Tăng số lượng nếu chưa đạt giới hạn tối đa
      const maxQuantity = this.getMaxQuantity(item.id);
      if (item.quantity < maxQuantity) {
        item.quantity++;
      }
    },
    decreaseQuantity(item) {
      // Giảm số lượng hoặc xóa nếu số lượng xuống 0
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.deleteproduct(item);
      }
    },
    deleteproduct(item) {
      this.cart = this.cart.filter(x => x.id !== item.id);
    },
    xoahet() {
      this.cart = [];
    },
    getMaxQuantity(productId) {
      // Lấy số lượng tối đa từ items.js
      const product = items.find(item => item.id === productId);
      return product ? product.quantity : 0;
    }
  },
  created() {
    eventBus.on('add-to-cart', (productId) => {
      const product = cart.find(item => item.id === productId);
      if (product) {
        this.cart = [...this.cart]; // Cập nhật lại giỏ hàng
      }
    });
  },
};
</script>

<style scoped>
</style>

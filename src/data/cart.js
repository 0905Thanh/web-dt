import eventBus from '../eventBus';
import items from './items'; // Import items để tham chiếu các sản phẩm

const cart = [];

// Lắng nghe sự kiện thêm sản phẩm vào giỏ hàng
eventBus.on('add-to-cart', (productId) => {
  const product = items.find(item => item.id === productId);
  if (product) {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
      // Kiểm tra nếu số lượng hiện tại chưa đạt giới hạn tối đa
      if (existingProduct.quantity < product.quantity) {
        existingProduct.quantity++;
      }
    } else {
      cart.push({
        ...product,
        quantity: 1, // Số lượng mặc định là 1 khi thêm lần đầu
      });
    }
  }
});

// Lắng nghe sự kiện xóa sản phẩm khỏi giỏ hàng
eventBus.on('remove-from-cart', (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng
  }
});

export default cart;

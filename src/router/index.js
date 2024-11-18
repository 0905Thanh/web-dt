// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ComHeader from '@/components/ComHeader.vue';
import ComHome from '@/components/ComHome.vue';
import ComFooter from '@/components/ComFooter.vue';
import ComProduct from '@/components/ComProduct.vue';
import ComKhuyenMai from '@/components/ComKhuyenMai.vue';
import ComLienHe from '@/components/ComLienHe.vue';
import ComGioiThieu from '@/components/ComGioiThieu.vue';
import ComLogin from '@/components/ComLogin.vue';
import ComRegister from '@/components/ComRegister.vue';
import ComCart from '@/components/ComCart.vue';
// import ComLoginRegister from '@/components/ComLoginRegister.vue';


const routes = [
  {
    path: '/', // Thay đổi đường dẫn để dễ hiểu hơn
    name: 'Home',
    component: ComHome
  },
  {
    path: '/header', // Thay đổi đường dẫn
    name: 'Header',
    component: ComHeader
  },
  {
    path: '/footer', // Thay đổi đường dẫn
    name: 'Footer',
    component: ComFooter
  },
  {
    path: '/product', // Thay đổi đường dẫn
    name: 'Product',
    component: ComProduct
  },
  {
    path: '/khuyenmai', // Thay đổi đường dẫn
    name: 'KhuyenMai',
    component: ComKhuyenMai
  },
  {
    path: '/lienhe', // Thay đổi đường dẫn
    name: 'LienHe',
    component: ComLienHe
  },
  {
    path: '/gioithieu', // Thay đổi đường dẫn
    name: 'GioiThieu',
    component: ComGioiThieu
  },
  {
    path: '/register',
    name: 'Register',
    component: ComRegister,
  },
  {
    path: '/login',
    name: 'Login',
    component: ComLogin,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ComCart,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

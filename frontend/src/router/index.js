
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeTemp from '@/views/HomeTemp.vue'
import LoginPage from '@/views/LoginPage.vue'
import CategoryPage from '@/views/CategoryPage.vue'  // 👈 bunu ekle



const routes = [
  { path: '/', name: 'Home', component: HomeTemp },
  { path: '/login', name: 'Login', component: LoginPage },
   {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue')  // Lazy load
  },
  { path: '/search', name: 'Search', component: () => import('@/views/SearchProducts.vue') },

  // BU SATIR ÖNCESİNE VİRGÜL GELMELİYDİ ✅
  {
    path: "/category/:category+",
    name: "CategoryPage",
    component: () => import("@/views/CategoryPage.vue"),
  }
 


]

export default createRouter({
  history: createWebHistory(),
  routes
})






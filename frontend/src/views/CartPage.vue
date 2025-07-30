<template>
  <div class="cart">
    <h2>🛒 Sepet</h2>

    <div v-if="cartItems.length === 0">Sepetiniz boş.</div>

    <ul v-else>
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        {{ item.name }} - {{ item.quantity }} adet - {{ item.price * item.quantity }} TL
        <button @click="remove(item.id)">Kaldır</button>
      </li>
    </ul>

    <div v-if="cartItems.length > 0" class="total">
      Toplam: {{ totalPrice }} TL
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cart = useCartStore()
const { items: cartItems, totalPrice } = storeToRefs(cart)

function remove(id) {
  cart.removeFromCart(id)
}
</script>

<style scoped>
.cart {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-top: 2rem;
}
.cart-item {
  margin-bottom: 0.5rem;
}
.total {
  margin-top: 1rem;
  font-weight: bold;
}
</style>

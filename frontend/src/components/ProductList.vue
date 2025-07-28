<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} TL</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
}
</style>

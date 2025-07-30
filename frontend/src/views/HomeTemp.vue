
<!-- src/views/Hometemp.vue -->
<template>
  <div>
    <ProductSlider :products="products" />
    <SmartSection :products="products" />
    <!-- <CategoriesSection /> -->
     <CategoriesSection @products-fetched="updateProducts" />
    <TopCategories />
    <DailyEssentials />
  </div>
</template>

<script>
import axios from 'axios';
import ProductSlider from '@/components/ProductSlider.vue'
import SmartSection from '@/components/SmartSection.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import TopCategories from '@/components/TopCategories.vue';
import DailyEssentials from '@/components/DailyEssentials.vue';

export default {
  name: 'HomeTemp',
  components: {
    ProductSlider,
    SmartSection,
    CategoriesSection,
    TopCategories,
    DailyEssentials
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
  axios.get('http://localhost:3000/api/products')
    .then(response => {
      this.products = response.data;
      console.log("Gelen ürün verisi:", this.products); // 👈 Bu önemli
    })
    .catch(error => {
      console.error('Veri çekme hatası:', error);
    });
},

 methods: {
    updateProducts(newProducts) {
      this.products = newProducts;
      console.log('updateProducts ile güncellenen ürünler:', newProducts);
    }
  }
}

 

</script>





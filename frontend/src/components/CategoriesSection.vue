<!-- categories section kısmı html  -->
<template>
  <section class="categories-section">
    <div class="categories-header">
      <h3>Alışveriş Yapın <span>En İyi Kategorilerden </span> </h3>
    </div>

    <div class="categories-list">
      <div
        class="category-item"
        :class="{ active: selectedCategory === 'Spor' }"
        @click="fetchProducts('Spor')"
      >
        <div class="image-wrapper">
          <img src="/img/categori-sections/img 1.png" alt="Spor" />
        </div>
        <p>Spor</p>
      </div>
      <div
        class="category-item"
        :class="{ active: selectedCategory === 'Kitap' }"
        @click="fetchProducts('Kitap')"
      >
        <div class="image-wrapper">
          <img src="/img/categori-sections/img 2.png" alt="Kitap" />
        </div>
        <p>Kitap</p>
      </div>
      <div
        class="category-item"
        :class="{ active: selectedCategory === 'Electronik' }"
        @click="fetchProducts('Electronik')"
      >
        <div class="image-wrapper">
          <img src="/img/categori-sections/img 3.png" alt="Electronics" />
        </div>
        <p>Electronik</p>
      </div>
      <div
        class="category-item"
        :class="{ active: selectedCategory === 'Eğlence' }"
        @click="fetchProducts('Eğlence')"
      >
        <div class="image-wrapper">
          <img src="/img/categori-sections/img 4.png" alt="Eğlence" />
        </div>
        <p>Eğlence</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CategoriesSection",
  data() {
    return {
      selectedCategory: "Spor", // Varsayılan kategori
    };
  },
  methods: {
  fetchProducts(category) {
    this.selectedCategory = category;

    // 👇 kategori adına göre yönlendirme
    let routeCategory = '';
    switch (category) {
      case 'Spor':
        routeCategory = 'spor';
        break;
      case 'Kitap':
        routeCategory = 'kitap';
        break;
      case 'Electronik':
        routeCategory = 'elektronik';
        break;
      case 'Eğlence':
        routeCategory = 'eğlence';
        break;
    }

    // 👇 yönlendirme burada yapılır
    this.$router.push({ name: 'CategoryPage', params: { category: routeCategory } });
  }
}
};

</script>
<style scoped>
/* buraya özel CSS ekleyeceksen yazabilirsin */
</style>

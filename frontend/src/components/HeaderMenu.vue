<template>
  <div class="header-bottom">
    <div class="top">
      <div class="wrapper">
        <ul>
          <li v-for="categoryItem in categories" :key="categoryItem.name">
            <a href="#">{{ categoryItem.name }}</a>
            <div class="img"></div>
            <ul class="dropdown" v-if="categoryItem.subCategories.length">
              <li v-for="sub in categoryItem.subCategories" :key="sub">
                <a href="#" @click.prevent="goToCategory(categoryItem.name + (sub ? '/' + sub : ''))">
                  {{ sub || categoryItem.name }}
                </a>
              </li>
            </ul>
            <ul class="dropdown" v-else>
              <li>
                <a href="#" @click.prevent="goToCategory(categoryItem.name)">
                  {{ categoryItem.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      products: [],
      categories: [],
    };
  },
  methods: {
    goToCategory(path) {
      const slug = path
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/&/g, 've')
        .replace(/\/+/g, '/');
      this.$router.push(`/category/${slug}`);
    },
    fetchProducts() {
      // Örnek: Backend'de /api/products endpoint'i var diyelim
      fetch('/api/products')
        .then(res => res.json())
        .then(data => {
          this.products = data;
          this.extractCategories();
        })
        .catch(err => console.error('Ürün verisi çekilemedi:', err));
    },
    extractCategories() {
      // category ve subCategory bilgilerini kullanarak menü yapısını oluştur
      const categoryMap = {};

      this.products.forEach(product => {
        const cat = product.category || 'Diğer';
        const sub = product.subCategory || '';

        if (!categoryMap[cat]) {
          categoryMap[cat] = new Set();
        }
        if (sub) {
          categoryMap[cat].add(sub);
        }
      });

      // Obje formatına çevir, subCategory'ler array olacak
      this.categories = Object.entries(categoryMap).map(([cat, subs]) => ({
        name: cat,
        subCategories: Array.from(subs),
      }));
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

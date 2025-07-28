

<template>
  <div class="category-page">
    <h2 class="category-title">{{ formattedCategory }}</h2>

    <div class="product-grid">
      <div
        v-for="product in filteredProducts"
        :key="product._id"
        class="product-card"
        style="cursor: pointer;"
      >
        <a
          href="#"
          @click.prevent="goToProduct(product._id)"
          style="display: flex; flex-direction: column; align-items: center; text-decoration: none; color: inherit;"
        >
          <img
             :src="`http://localhost:3000${product.image}`" alt="Ürün resmi" 
          />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-desc">{{ product.description }}</p>
          <p class="product-price"><strong>Fiyat:</strong> {{ product.priceNew }} ₺</p>
        </a>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "CategoryPage",

  data() {
    return {
      allProducts: [],
    };
  },

  computed: {
    // URL'den gelen kategori parametresini işle
    category() {
      const param = this.$route.params.category;
      if (Array.isArray(param)) {
        return param.join("/").toLowerCase(); // Örn: electronics/mobile-phones
      }
      return param?.toLowerCase() || "";
    },

    // Başlık için daha okunabilir hale getir
    formattedCategory() {
      return this.category
        .split("/")
        .map(part =>
          part
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        )
        .join(" > ");
    },

    // Ürünleri kategoriye göre filtrele
    filteredProducts() {
      return this.allProducts.filter(product => {
        // Örneğin, kategori 'electronics/mobile-phones' ve ürün.category = 'mobile-phones' ise eşleşsin
        return (
          product.category.toLowerCase() === this.category || // direkt eşleşme
          this.category.includes(product.category.toLowerCase()) // alt kategori içinde varsa
        );
      });
    },
  },

  watch: {
    '$route.params.category': {
      immediate: true,
      handler() {
        this.fetchProducts();
      },
    },
  },

 methods: {
    fetchProducts() {
      fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data => {
          this.allProducts = data;
        })
        .catch(err => console.error("Ürün verisi alınamadı:", err));
    },
    goToProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>




<style scoped>
.category-page {
  padding: 1.5rem;
}

.category-title {
  font-size: 20px;
  font-weight: 700;
  color: #666666;
  margin-bottom: 1rem;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
}

/* Ürün kutusu */
.product-card {
  width: 160px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 0.8rem;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.02);
  transition: box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.product-card:hover {
  border-color: #008ECC;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05);
}

/* Ürün resmi */
.product-image {
  
  width: 121px;        /* İstediğin genişlik */
  height: 140px;       /* İstediğin yükseklik */
  object-fit: cover;   /* Resmi kutuya kırparak tam doldurur */
  border-radius: 8px;  /* Köşeleri yuvarlatmak için */
  max-width: 100%;     /* Responsive için */
}

/* Ürün adı */
.product-name {
  font-size: 14px;
  font-weight: 600;
  color: #222222;
  margin: 0 0 0.3rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

/* Açıklama */
.product-desc {
  font-size: 12px;
  color: #555555;
  margin: 0 0 0.5rem 0;
  height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* -webkit-line-clamp: 2; */
  -webkit-box-orient: vertical;
  width: 100%;
}

/* Fiyat */
.product-price {
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  margin-top: auto;
}
</style>
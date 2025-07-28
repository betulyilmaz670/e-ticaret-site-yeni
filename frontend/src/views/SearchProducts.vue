<!-- <template>
  <div class="search-products">
    <h2>Search Results for "{{ query }}"</h2>

    <div v-if="products.length">
      <div v-for="product in products" :key="product._id" class="product">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <p v-else>No products found.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SearchProducts",
  data() {
    return {
      products: [],
      query: this.$route.query.q || ""
    };
  },
  watch: {
    '$route.query.q': {
      handler(newQuery) {
        this.query = newQuery;
        this.fetchProducts();
      },
      immediate: true
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await axios.get(`http://localhost:3000/api/products/search?q=${this.query}`);
        this.products = res.data;
      } catch (err) {
        console.error("Arama sırasında hata:", err);
      }
    }
  }
};
</script>

<style scoped>
.search-products {
  padding: 20px;
}
.product {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
</style> -->


<!-- <template>
  <div class="search-products">
    <h2>"{{ query }}" için Arama Sonuçları</h2>

    <div v-if="products.length" class="product-grid">
      <div
        v-for="product in products"
        :key="product._id"
        class="product-card"
        @click="goToProduct(product._id)"
        style="cursor: pointer;"
      >
        <img :src="product.image" alt="Product image" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p v-if="product.description">{{ product.description }}</p>
        <p class="price">{{ product.priceNew }} TL</p>
      </div>
    </div>

    <p v-else>Hiçbir ürün bulunamadı.</p>
  </div>
</template> -->

<template>
  <div class="search-products">
    <h2>"{{ query }}" için Arama Sonuçları</h2>

    <div v-if="products.length" class="product-grid">
      <div
        v-for="product in products"
        :key="product._id"
        class="product-card"
        style="cursor: pointer;"
      >
        <a
          href="#"
          @click.prevent="goToProduct(product._id)"
          style="display: flex; flex-direction: column; align-items: center; text-decoration: none; color: inherit;"
        >
          <img :src="`http://localhost:3000${product.image}`" alt="Ürün resmi" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p v-if="product.description">{{ product.description }}</p>
          <p class="price">{{ product.priceNew }} TL</p>
        </a>
      </div>
    </div>

    <p v-else>Hiçbir ürün bulunamadı.</p>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: "SearchProducts",
  data() {
    return {
      products: [],
      query: this.$route.query.q || ""
    };
  },
  watch: {
    '$route.query.q': {
      handler(newQuery) {
        this.query = newQuery;
        this.fetchProducts();
      },
      immediate: true
    }
  },
  methods: {
    async fetchProducts() {
  try {
    console.log("API isteği gönderiliyor:", this.query);
    const res = await axios.get(`http://localhost:3000/api/products/search?q=${encodeURIComponent(this.query)}`);
    console.log("API cevabı:", res.data);
    this.products = res.data;
  } catch (err) {
    console.error("Arama sırasında hata:", err.message || err);
  }
},
 goToProduct(id) {
    // this.$router.push({ name: 'ProductDetail', params: { id } });
    console.log("Tıklanan ürün ID:", id);  // Bu satırı ekle
    this.$router.push({ name: 'ProductDetail', params: { id } });
  
  }
  
  }
};
</script>

<style scoped>
.search-products {
  padding: 1.5rem;
}

.search-products h2 {
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
  width: 100%;
  height: 120px;
  object-fit: contain;
  background: #f5f5f5;
  border-radius: 12px 12px 0 0;
  margin-bottom: 0.6rem;
}

/* Ürün adı */
.product-card h3 {
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
.product-card p {
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
.price {
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  margin-top: auto;
}
</style>






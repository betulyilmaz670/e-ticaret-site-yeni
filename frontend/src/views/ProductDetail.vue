<!-- Kullanıcı bir ürüne tıklayınca /product/:id gibi bir sayfaya yönlensin ve o ürünün:

    Görseli

    Adı

    Açıklaması

    Fiyatı
    ...gibi detayları görünsün. -->


<template>
    <div v-if="product" class="product-detail">
      <div class="product-left">
      <!-- <img :src="product.image" class="product-img" /> -->
       <img :src="`http://localhost:3000${product.image}`" alt="Ürün resmi" />

      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p><strong>İndirim:</strong> {{ product.discount }}</p>
      <p><strong>Yeni Fiyat:</strong>{{ product.priceNew }} ₺</p>
      <p><strong>Eski Fiyat:</strong> <s>{{ product.priceOld }}₺</s></p>
      <!-- Sepete Ekle Butonu -->
      <button @click="addToCart">Sepete Ekle</button>
      

      <!-- Yıldız Değerlendirme -->
      <div class="rating">
        <span
          v-for="star in 5"
          :key="star"
          :class="{ filled: star <= rating }"
          @click="setRating(star)"
        >★</span>
        <span class="rating-label">{{ rating }}/5</span>
      </div>

      <!-- Yorum Alanı -->
      <textarea v-model="newComment" placeholder="Yorum yaz..." class="comment-box" />
      <button @click="addComment">Yorumu Ekle</button>

      <div v-if="comments.length" class="comment-list">
        <h4>Yorumlar:</h4>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
        </ul>
      </div>
    </div>

    <!-- Açıklama kısmını sağa aldık -->
  <div class="product-right">
    <h3>Açıklama</h3>
    <p>{{ product.description }}</p>
  </div>
</div>

    <p v-else>Ürün bilgisi yükleniyor...</p>
  
</template>

<script>
import axios from 'axios';
import { useCartStore } from '@/stores/cart'


export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
      newComment: '',
      comments: [],
      rating: 0,
    };
  },
  methods: {
   
    async fetchProduct()
    {
      this.cart = useCartStore();  // store'u burada başlatıyoruz
  try {
    const productId = this.$route.params.id;
const res = await axios.get(`http://localhost:3000/api/products/${productId}`);

    console.log("Ürün verisi backend'den geldi:", res.data);
    this.product = res.data;
  } catch (err) {
    console.error("Ürün alınamadı", err);
  }
},

    addComment() {
      if (!this.newComment.trim()) return;
      this.comments.push(this.newComment.trim());
      this.newComment = '';
    },
    setRating(star) {
      this.rating = star;
    },
    
    
    addToCart() {
      this.cart.addToCart(this.product);
      alert(`${this.product.name} sepete eklendi!`);
    },

  },
  mounted() {
    this.fetchProduct();
  },

   


};
</script>



 <style scoped>
.product-detail-section {
  padding: 2rem;
  background: #f9f9f9;
}
.product-detail {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 0 12px rgba(0,0,0,0.05);
}

/* Ürün resmi */
.product-img {
  width: 121px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  max-width: 100%;
}

/* Yıldız puanlama */
.rating {
  margin: 1rem 0;
  font-size: 1.5rem;
}
.rating span {
  cursor: pointer;
  color: #ccc;
}
.rating span.filled {
  color: #FFD700;
}
.rating-label {
  font-size: 1rem;
  margin-left: 0.5rem;
}

/* Yorum kutusu */
.comment-box {
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.comment-list {
  margin-top: 1rem;
  background-color: #f1faff;
  padding: 1rem;
  border-radius: 8px;
}

/* === Yeni eklenen alanlar buradan itibaren === */

/* Detay alanını iki sütuna ayırmak için */
.product-detail {
  display: flex;
  gap: 2rem;
}

/* Sol içerik bloğu (mevcut resim, fiyat, yorumlar vs) */
.product-left {
  flex: 2;
}

/* Sağ açıklama bloğu */
.product-right {
  flex: 1;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
}
</style>



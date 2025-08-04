<template>
  <section class="section" id="section">
    <div class="wrapper">
      <div class="smart">
        <div class="top">
          <h3> Alışveriş Yapın <span> En İyi Akıllı Telefonlarda </span></h3>
          <p>View All <img src="/img/Arrow - Down.png" alt="" /></p>
        </div>

        <div class="smart-swiper swiper">
          <div class="swiper-scrollbar"></div>

          <div class="smart-item swiper-wrapper">

            <!-- İlk 5 ürün sabit -->
            <div class="smart-slide swiper-slide">
              <router-link to="/product/1" class="box">
                <div class="box-top">
                  <img src="/img/smartsphones/image 1.png" alt="" />
                  <p>56% OFF</p>
                </div>
                <div class="box-bottom">
                  <h4>Galaxy S22 Ultra</h4>
                  <p><span class="new-price">32999₺</span><span>74999₺</span></p>
                  <hr />
                  <h3 class="green-price">İndirim - 32999₺</h3>
                </div>
              </router-link>

              <router-link to="/product/2" class="box">
                <div class="box-top">
                  <img src="/img/smartsphones/image 2.png" alt="" />
                  <p>56% OFF</p>
                </div>
                <div class="box-bottom">
                  <h4>Galaxy M13 (4GB | 64 GB )</h4>
                  <p><span class="new-price">10499₺</span><span>14999₺</span></p>
                  <hr />
                  <h3 class="green-price">İndirim - 4500₺</h3>
                </div>
              </router-link>

              <router-link to="/product/3" class="box">
                <div class="box-top">
                  <img src="/img/smartsphones/image 3.png" alt="" />
                  <p>56% OFF</p>
                </div>
                <div class="box-bottom">
                  <h4>Galaxy M33 (4GB | 64 GB )</h4>
                  <p><span class="new-price">16999₺</span><span>24999₺</span></p>
                  <hr />
                  <h3 class="green-price">İndirim - 8000₺</h3>
                </div>
              </router-link>

              <router-link to="/product/4" class="box">
                <div class="box-top">
                  <img src="/img/smartsphones/image 4.png" alt="" />
                  <p>56% OFF</p>
                </div>
                <div class="box-bottom">
                  <h4>Galaxy M53 (4GB | 64 GB )</h4>
                  <p><span class="new-price">31999₺</span><span>40999₺</span></p>
                  <hr />
                  <h3 class="green-price">İndirim - 9000₺</h3>
                </div>
              </router-link>

              <router-link to="/product/5" class="box">
                <div class="box-top">
                  <img src="/img/smartsphones/image 5.png" alt="" />
                  <p>56% OFF</p>
                </div>
                <div class="box-bottom">
                  <h4>Galaxy S22 Ultra</h4>
                  <p><span class="new-price">67999₺</span><span>85999₺</span></p>
                  <hr />
                  <h3 class="green-price">İndirim - 18000₺</h3>
                </div>
              </router-link>
            </div>

            <!-- MongoDB'den gelen ürünler 5'li gruplar halinde (chunk) -->
            <template v-for="(chunk, index) in chunkedProducts" :key="index">
              <div class="smart-slide swiper-slide">
                <router-link
                  v-for="product in chunk"
                  :key="product._id"
                  :to="`/product/${product._id}`"
                  class="box"
                >
                  <div class="box-top">
                    <img :src="product.image" :alt="product.name" />
                    <p>{{ product.discount }} OFF</p>
                  </div>
                  <div class="box-bottom">
                    <h4>{{ product.name }}</h4>
                    <p>
                      <span class="new-price">₺{{ product.priceNew }}</span>
                      <span>₹{{ product.priceOld }}</span>
                    </p>
                    <hr />
                    <h3 class="green-price">Save - ₺{{ product.priceOld - product.priceNew }}</h3>
                  </div>
                </router-link>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import axios from 'axios'

export default {
  name: 'SmartSection',
  setup() {
    const products = ref([])

    // Array'i 5'erli parçalara bölen fonksiyon
    const chunkArray = (arr, size) => {
      const chunked = []
      for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size))
      }
      return chunked
    }

    const chunkedProducts = ref([])

    let swiperInstance = null
    const initSwiper = () => {
      if (swiperInstance) swiperInstance.destroy(true, true)
      swiperInstance = new Swiper('.smart-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      })
    }


 


  onMounted(async () => {
  try {
    const res = await axios.get('/api/products')

    // Sadece "telefon" kategorisindeki ürünleri al
    const filtered = res.data.filter(p => p.category?.toLowerCase() === 'telefon')

    // İlk 5 sabit ürün dışında kalanları al
    products.value = filtered.slice(5)
    chunkedProducts.value = chunkArray(products.value, 5)

    await nextTick()
    setTimeout(() => {
      initSwiper()
    }, 100)
  } catch (err) {
    console.error('Ürünler çekilemedi:', err)
  }
})


    return { chunkedProducts }
  },
}
</script>

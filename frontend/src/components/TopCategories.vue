<template>
  <section class="top-electronics-section">
    <div class="section-header">
      <h3>Shop From <span>Top Categories</span></h3>
      <p>View All <img src="/img/Arrow - Down.png" alt="Arrow"></p>
    </div>

    <div class="electronics-swiper swiper mySwiper">
      <div class="swiper-wrapper">

        <!-- Slide 1 -->
        <div class="swiper-slide brand-card iphone-card">
          <div class="left">
            <div class="brand-label">IPHONE</div>
            <div class="brand-logo">
              <img src="/img/categori-bar/ıphone simgesi.png" alt="iPhone Logo">
            </div>
            <h4>UP TO 80% OFF</h4>
          </div>
          <div class="right">
            <div class="yuvarlak">
              <img class="background-circle" src="/img/categori-bar/siyah yuvarlak.png" alt="Circle">
            </div>
            <div class="logo-ıphone">
              <img class="product-image" src="/img/categori-bar/ıphone.png" alt="iPhone">
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="swiper-slide brand-card realme-card">
          <div class="left">
            <div class="brand-label">REALME</div>
            <div class="brand-logo">
              <img src="/img/categori-bar/realmi logo.png" alt="Realme Logo">
            </div>
            <h4>UP TO 80% OFF</h4>
          </div>
          <div class="right">
            <div class="yuvarlak">
              <img class="background-circle" src="/img/categori-bar/sarı yuvarlak.png" alt="Circle">
            </div>
            <div class="logo-ıphone">
              <img class="product-image" src="/img/categori-bar/realme.png" alt="Realme">
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="swiper-slide brand-card xiaomi-card">
          <div class="left">
            <div class="brand-label">XIAOMI</div>
            <div class="brand-logo">
              <img src="/img/categori-bar/xiam logo.png" alt="Xiaomi Logo">
            </div>
            <h4>UP TO 80% OFF</h4>
          </div>
          <div class="right">
            <div class="yuvarlak">
              <img class="background-circle" src="/img/categori-bar/pembe yuvarlak.png" alt="Circle">
            </div>
            <div class="logo-ıphone">
              <img class="product-image" src="/img/categori-bar/mı.png" alt="Xiaomi">
            </div>
          </div>
        </div>

      </div>

      <!-- Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script setup>
// swiper için import gerekiyor
import { onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

onMounted(() => {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      1024: { slidesPerView: 4, spaceBetween: 40 },
    },
  });
});
</script>




<!-- productSlider.vue dosyası burası swiper olan yer  -->

<template>
    <div class="header-bottom">
    <div class="bottom">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="left">
                                <h3>Akıllı Saatlerde En İyi Fırsat</h3>
                                <h1>AKILLI TAKILABİLİR</h1>
                                <p>%80 e Kadar İndirim</p>
                            </div>
                            <img src="img/header-bottom/mask group.png" alt="">
                            <img src="img/header-bottom/watch.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <div class="left">
                                <h3>Akıllı Saatlerde En İyi Fırsat</h3>
                                <h1>AKILLI TAKILABİLİR</h1>
                                <p>%80 e Kadar İndirim</p>
                            </div>
                            <img src="img/header-bottom/mask group.png" alt="">
                            <img src="img/header-bottom/watch.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <div class="left">
                                <h3>Akıllı Saatlerde En İyi Fırsat</h3>
                                <h1>AKILLI TAKILABİLİR</h1>
                                <p>%80 e Kadar İndirim</p>
                            </div>
                            <img src="img/header-bottom/mask group.png" alt="">
                            <img src="img/header-bottom/watch.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <div class="left">
                                <h3>Akıllı Saatlerde En İyi Fırsat</h3>
                                <h1>AKILLI TAKILABİLİR</h1>
                                <p>%80 e Kadar İndirim</p>
                            </div>
                            <img src="img/header-bottom/mask group.png" alt="">
                            <img src="img/header-bottom/watch.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <div class="left">
                               <h3>Akıllı Saatlerde En İyi Fırsat</h3>
                                <h1>AKILLI TAKILABİLİR</h1>
                                <p>%80 e Kadar İndirim</p>
                            </div>
                            <img src="img/header-bottom/mask group.png" alt="">
                            <img src="img/header-bottom/watch.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <div class="left">
                                <h3>Akıllı Saatlerde En İyi Fırsat</h3>
                                <h1>AKILLI TAKILABİLİR</h1>
                                <p>%80 e Kadar İndirim</p>
                            </div>
                            <img src="img/header-bottom/mask group.png" alt="">
                            <img src="img/header-bottom/watch.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <div class="left">
                              <h3>Akıllı Saatlerde En İyi Fırsat</h3>
                                <h1>AKILLI TAKILABİLİR</h1>
                                <p>%80 e Kadar İndirim</p>
                            </div>
                            <img src="img/header-bottom/mask group.png" alt="">
                            <img src="img/header-bottom/watch.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <div class="left">
                                <h3>Akıllı Saatlerde En İyi Fırsat</h3>
                                <h1>AKILLI TAKILABİLİR</h1>
                                <p>%80 e Kadar İndirim</p>
                            </div>
                            <img src="img/header-bottom/mask group.png" alt="">
                            <img src="img/header-bottom/watch.png" alt="">
                        </div>

                    </div>
                    <div class="swiper-btn-next btn "></div>
                    <div class="swiper-btn-prev btn "></div>
                    <div class="swiper-pagination"></div>
                </div>

            </div>
    </div>   
</template>

<script>
import { nextTick } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default {
  name: 'ProductSlider',
  mounted() {
  nextTick(() => {
    new Swiper('.mySwiper', {
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' },
    });
  });
   
}
}
</script>


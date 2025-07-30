<template>
  <section class="daily-section">
    <div class="daily-header">
      <h3>Günlük <span>İhtiyaçlar </span> </h3>
      <!-- <p>View All <img src="img/Arrow - Down.png" alt="" /></p> -->
    </div>

    <div class="daily-list">
      <div 
        v-for="(item, index) in dailyItems" 
        :key="index" 
        class="daily-item" 
        :class="{ active: index === activeIndex }"
        @click="setActive(index)"
      >
        <div class="image-wrapper-daily">
          <img :src="item.img" :alt="item.alt" />
        </div>
        <p>{{ item.name }}</p>
        <div class="indirim-haberi">
          <h4>%50 İNDİRİM </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DailyEssentials",
  data() {
    return {
      activeIndex: 0,
      dailyItems: [
        { img: "img/categori-daily/daily-1.png", alt: "Daily Essentials", name: "Günlük İhtiyaçlar" },
        { img: "img/categori-daily/daily-2.png", alt: "Vegitables", name: "Sebze" },
        { img: "img/categori-daily/daily-3.png", alt: "Fruits", name: "Meyveler" },
        { img: "img/categori-daily/daily-4.png", alt: "Strowberry", name: "Çilek" },
        { img: "img/categori-daily/daily-5.png", alt: "Mango", name: "Mango" },
        { img: "img/categori-daily/daily-6.png", alt: "Cherry", name: "Kiraz" },
      ],
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<template>
  <section class="daily-section">
    <div class="daily-header">
      <h3>Daily <span>Essentials </span> </h3>
      <p>View All <img src="img/Arrow - Down.png" alt="" /></p>
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
          <h4>UP to 50% OFF</h4>
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
        { img: "img/categori-daily/daily-1.png", alt: "Daily Essentials", name: "Daily Essentials" },
        { img: "img/categori-daily/daily-2.png", alt: "Vegitables", name: "Vegitables" },
        { img: "img/categori-daily/daily-3.png", alt: "Fruits", name: "Fruits" },
        { img: "img/categori-daily/daily-4.png", alt: "Strowberry", name: "Strowberry" },
        { img: "img/categori-daily/daily-5.png", alt: "Mango", name: "Mango" },
        { img: "img/categori-daily/daily-6.png", alt: "Cherry", name: "Cherry" },
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
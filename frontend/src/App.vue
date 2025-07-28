<!-- <template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script> -->




<template>
  <div id="app">
    <AppHeader /> <!-- sadece header sabit -->
    <router-view /> <!-- geri kalan her şey burada değişir -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: { AppHeader }
}
</script>

<style>
@import "@/assets/style.css";
</style>
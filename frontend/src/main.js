import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

createApp(App)
  .use(router)      // önce router kullanılıyor
  .mount('#app')    // sonra mount ediliyor
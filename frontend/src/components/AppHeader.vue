<!-- AppHEader.vue dosyası html kodları -->


<template>
     <header id="header">
        <div class="header-top"><!--bu kısım en üst kısım için-->
            <div class="wrapper"><!--burası hizalama yapmak için hepsini içine alıp öyle hizalayacağım -->
                <h3>MegaMart dünyasına Hoşgeldiniz!</h3>
                <!--sonra figma da buranın yanında olan şeyleri tek tek ul li ile yapabilirdik ama buna gerek yok çünkü sınıf açacağız-->
                <div class="links">
                    <div>
                        <div><img src="/img/header-top/Location.svg" alt="">
                            <p>Teslimat için <span>423651</span></p>
                        </div>
                        <div><img src="/img/header-top/iconoir_delivery-truck.svg" alt="">
                            <p>Siparişinizi takip edin</p>
                        </div>
                        <div><img src="/img/header-top/Discount.svg" alt="">
                            <p>Tüm telifle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-logo">
            <div class="wrapper">
                <router-link to="/" class="logo">
                <img src="/img/Logo.svg" alt="Logo">
                <img src="/img/MegaMart.svg" alt="MegaMart">
                </router-link>
                <div class="right">
                    <div class="search">
                        <img src="/img/Search.svg" alt="">
                        <input type="search" placeholder="Temel ihtiyaçlarınızı, market alışverişlerinizi ve daha fazlasını arayın..." v-model="searchText" @keyup.enter="goToSearch" >
                        <img src="/img/list.svg" alt="">
                    </div>
                    <div class="form">
                        <div><img src="/img/user.svg" alt=""><a href="#" @click.prevent="goToLogin">Giriş Yap/Kayıt Ol</a></div>
                        <div>
                          <img src="/img/Buy.svg" alt="">
                         <router-link to="/cart">Sepet</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div>
         <HeaderMenu />
            </div>
     
    </header>
</template>




<script>
import axios from 'axios';  // axios'u ekledik
import HeaderMenu from './HeaderMenu.vue'

export default {
  name: "AppHeader",
  components: {
    HeaderMenu
  },
  data() {
    return {
      username: '',
      searchText: '',   // buraya ekledik
    };
  },
  methods: {
    goToLogin() {
      this.$router.push('/login');
    },
    fetchUserData() {
      axios.get('http://localhost:3000/api/user')  // GET isteği örneği
        .then(response => {
          this.username = response.data.name;
        })
        .catch(error => {
          console.error(error);
        });
    },
    goToSearch() {
      if (this.searchText.trim() !== '') {
        this.$router.push({ path: '/search', query: { q: this.searchText } });
      }
    }
  },
  mounted() {
    this.fetchUserData();  // Bileşen yüklendiğinde veri çek
  },
  
  goToCart() {
  this.$router.push('/cart')
}

 

}
</script>

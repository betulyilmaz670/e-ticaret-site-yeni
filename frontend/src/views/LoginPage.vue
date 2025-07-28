<template>
  <div class="auth-container">
    <div class="tabs">
      <button 
        :class="{ active: activeTab === 'login' }" 
        @click="activeTab = 'login'">
        Giriş Yap
      </button>
      <button 
        :class="{ active: activeTab === 'register' }" 
        @click="activeTab = 'register'">
        Kayıt Ol
      </button>
    </div>

    <div class="form-container">
      <form v-if="activeTab === 'login'" @submit.prevent="handleLogin">
        <input v-model="loginEmail" type="email" placeholder="Email" required />
        <input v-model="loginPassword" type="password" placeholder="Şifre" required />
        <button type="submit">Giriş Yap</button>
      </form>

      <form v-else @submit.prevent="handleRegister">
        <input v-model="registerEmail" type="email" placeholder="Email" required />
        <input v-model="registerPassword" type="password" placeholder="Şifre" required />
        <input v-model="registerPasswordConfirm" type="password" placeholder="Şifreyi Onayla" required />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthTabs",
  data() {
    return {
      activeTab: 'login',
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerPassword: '',
      registerPasswordConfirm: '',
    }
  },
  methods: {
    handleLogin() {
      alert(`Giriş yapılıyor: ${this.loginEmail}`)
    },
    handleRegister() {
      if (this.registerPassword !== this.registerPasswordConfirm) {
        alert('Şifreler eşleşmiyor!')
        return
      }
      alert(`Kayıt yapılıyor: ${this.registerEmail}`)
    }
  }
}
</script>

<style scoped>
.auth-container {
  width: 360px;
  margin: 100px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 140, 204, 0.15);
  padding: 30px 25px;
  box-sizing: border-box;
  text-align: center;
}

/* Sekmeler */
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.tabs button {
  flex: 1;
  padding: 12px 0;
  border: none;
  background: #e6f2fb;
  color: #008ECC;
  font-weight: 600;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
  transition: background-color 0.3s ease;
  margin: 0 3px;
}

.tabs button.active {
  background: #008ECC;
  color: white;
}

/* Form stili */
.form-container input {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-container input:focus {
  outline: none;
  border-color: #008ECC;
}

.form-container button {
  width: 100%;
  background-color: #008ECC;
  color: white;
  font-weight: bold;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;
  transition: background-color 0.3s ease;
}

.form-container button:hover {
  background-color: #006b8c;
}
</style>
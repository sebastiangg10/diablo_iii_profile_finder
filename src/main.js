// Paquetes de npm
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Archivos locales de la app
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Configuracion extra
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Instalacion principal de Vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

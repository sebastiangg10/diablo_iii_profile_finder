// Paquetes de npm
import Vue from 'vue'

// BootstrapVue
import './plugins/BootstrapVue'
// Vue Font-Awesome
import './plugins/fontAwesome'

// Archivos locales de la app
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Global
import './assets/css/main.styl'

// Configuracion extra
Vue.config.productionTip = false

// Instalacion principal de Vue
new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')

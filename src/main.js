// Paquetes de npm
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Archivos locales de la app
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
// Iconos de tipo "Solid"
import { faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
// Iconos de tipo "Brand" (marcas o logos de empresas)
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
// El componente que vamos a utilizar
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// CSS Global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.styl'

library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
)

// Configuracion extra
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

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

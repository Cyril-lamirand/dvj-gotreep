import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)
library.add(faTimes)
library.add(faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Route Guard
router.beforeEach((to, from, next) => {
  let language = to.params.lang
  if (!language) {
    language = 'en'
  }
  i18n.locale = language
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

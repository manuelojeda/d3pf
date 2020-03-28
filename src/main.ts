import Vue from 'vue'
import CompApi from '@vue/composition-api'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/main.styl'

Vue.use(CompApi)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    console.log('Hola 😎')
    store.dispatch('oauth/getToken', null, { root: true })
  },
  render: h => h(App)
}).$mount('#app')


import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import index from '@/components/index'
//import {router} from "@/router/index"

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components:{ App }
})

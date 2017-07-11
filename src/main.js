
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import index from '@/components/index'
import Resource from 'vue-resource'
//import {router} from "@/router/index"

Vue.use(Vuex)
Vue.use(Resource)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components:{ App }
})

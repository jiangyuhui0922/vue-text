import Vue from 'vue'
import App from './App'
// import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'



      


// Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false





new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components:{ App}
})

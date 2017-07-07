
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'
import Hello from '@/components/Hello'
import demo1 from '@/components/demo1'

Vue.use(Vuex)
Vue.use(Router)

Vue.config.productionTip = false





let router=new Router({
	  mode:'history',
	  routes: [
	    {
	      path: '/hello',
	      name: 'Hello',
	      component: Hello
	    },
	    {
	      path: '/demo1/:item',
	      name: 'demo1',
	      component: demo1
	    }
	  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

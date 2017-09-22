import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/part/list'
import demo1 from '@/components/demo1'
import layout from '@/pages/layout'
import sideNav from '@/components/SideNav'
import index from '@/components/index'
import news from '@/pages/new/news'

Vue.use(Router)
export default new Router({
	  mode:'history',
	  routes: [
	    {
	    	 path:'/',
	    	 name:'index',
	    	 component:index
	    },
	    {
	      path: '/hello',
	      name: 'Hello',
	      component: Hello
	    },
	    {
	      path: '/demo1/:item',
	      name: 'demo1',
	      component: demo1
	    },
	    {
	    	path:'/new',
	    	name:'schoolnew',
            component:news
	    }
	  ]
})
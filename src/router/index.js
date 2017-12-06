import Vue from 'vue'
import Router from 'vue-router'
import partlist from '@/pages/part/list'
import demo1 from '@/components/demo1'
import layout from '@/pages/layout'
import sideNav from '@/components/SideNav'
import index from '@/components/index'
import newslist from '@/pages/new/news'
import friendlist from '@/pages/friends/friend'
import personallist from '@/pages/personal/personal'
import trainlist from '@/pages/train/train'
import marketlist from '@/pages/market/market'


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
	      path: '/partlist',
	      name: 'partlist',
	      component: partlist
	    },
	    {
	      path: '/demo1/:item',
	      name: 'demo1',
	      component: demo1
	    },
	    { 
	    	path:'/new',
	    	name:'schoolnew',
            component:newslist
	    },
	    {
	    	path:'/friend',
	    	name:'friendlist',
	    	component:friendlist
	    },
	    {
	    	path:'/personal',
	    	name:'personallist',
	    	component:personallist
	    },
	    {
	    	path:'/train',
	    	name:'trainlist',
	    	component:trainlist
	    },
	    {
	    	path:'/market',
	    	name:'marketlist',
	    	component:marketlist
	    }
	  ]
})
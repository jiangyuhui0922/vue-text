<template>
	  <div class="schoolnew">	      	      
	      	  <headd headname="校园新闻" v-on:sjj="bh"></headd>	
	      	  <div :class="[ishd? ksclass:jsclass,zzclass]">
	      	  	  <ul class="news-nav">
		      	  	   <li class="xz"><router-link  :to="{}">头条</router-link></li>
		      	  	   <li><router-link  :to="{}">娱乐</router-link></li>
		      	  	   <li><router-link  :to="{}">学习</router-link></li>
		      	  	   <li><router-link  :to="{}">交友</router-link></li>
		      	  	   <li><router-link  :to="{}">活动</router-link></li>
		      	  </ul>
	      	  </div>	      	 
	      	  <sideNav :class="[ishd? kksclass:ksclass,zzclass]"></sideNav>
	  </div> 
</template>
<script>    


import headd from '@/components/headd'
import sideNav from '@/components/SideNav'
	  export default{
           name:'schoolnew',
	  	   data (){
	  	   	     return {
	                ishd:true,
	                ksclass:'ks',
	                kksclass:'kks',
	                jsclass:'js',
	                zzclass:'zz'
	  	   	     }
	  	   },
	  	   components:{
	  	   	   headd,
	  	   	   sideNav
	  	   },
	  	    methods:{
    	 	 bh:function (value) {
    	 	     this.ishd=value

    	 	     // console.log(value)
    	 	 }

    	 }
	  }
</script>
<style scoped>
	   
	    .news-nav{overflow: hidden;}
	    .news-nav li{float: left;width: 20%;text-align: center;border-bottom:1px solid  #dedede}
        .news-nav li a{font-size: 0.24rem;line-height: 0.56rem;color: #727272}
        .news-nav li.xz{border-bottom:1px solid  #4c93eb}
        .news-nav li.xz a{color: #4c93eb}
</style>
<template>
	 <div class="index" >
	 	    <headd headname="嘻哈校园" v-on:sjj="bh"></headd>
		 	<div :class="[ishd? ksclass:jsclass,zzclass]">
				 	  <div>
				 	  	  <div class="index_banner">
				 	  	     <img src="../images/index_banner_02.jpg" alt="" />
				 	  	  </div>
				 	  </div>
				 	  <div class="container">
					      <div class="fl">
					      	  <router-link :to="{path:'new'}">
					 	  	      <div class="sch_new">校园新闻</div>	
					 	  	  </router-link>	 	  	
					 	  	  <div class="jy">
					 	  	  	  <div class="px">教育培训</div>
					 	  	  	  <div class="qz">微圈子</div>
					 	  	  </div>
					 	  	  <div class="tz">跳蚤市场</div>
					 	  	  <router-link :to="{path:'hello'}">
					 	  	  <div class="part">兼职吧</div>
					 	  	  </router-link>
					      </div>
				      </div>

				      
				 	  <div class="index_new">
				 	  	  <p class="index_new_p">最新</p>
				 	  	  <ul class="index_new_ul">
				 	  	  	  <li v-for="indexnewlist in newlist">
				 	  	  	  	 <img src="../images/new1_22.jpg" alt="" class="index_new_img" />
				 	  	  	  	 <div class="index_new_div">
				 	  	  	  	 	 <p class="index_new_title">{{indexnewlist.title}}</p> 
				 	  	  	  	 	 <p class="index_new_conter">{{indexnewlist.conter}}</p> 
									 <p class="index_new_gn">		 	 
									 	 <span class="index_new_pl" @click.once="add(indexnewlist.pl)">{{indexnewlist.pl}}</span>
									 	 <span class="index_new_dz" @click.once="add(indexnewlist.dz)">{{indexnewlist.dz}}</span>
									 </p>
				 	  	  	  	 </div>
				 	  	  	  </li>
				 	  	  </ul>
				 	  	  <p class="index_new_dd">内容到底了</p>
				 	  </div>

                      
		 	  </div>

		 	  <sideNav :class="[ishd? kksclass:ksclass,zzclass]"></sideNav>
	 </div>
</template>
<script>
	import  headd from '@/components/headd.vue'
	import sideNav from '@/components/sideNav.vue'
	import { newlist } from '@/service/newlist'
    export default{
    	 name:'index',
    	 data(){
    	 	 return{
    	 	    newlist:newlist,
                ishd:true,
                ksclass:'ks',
                kksclass:'kks',
                jsclass:'js',
                zzclass:'zz',
    	 	   
    	 	 }
    	 },
    	 components:{
    	 	 headd,
    	 	 sideNav
    	 },
    	 methods:{
    	 	 bh:function (value) {
    	 	     this.ishd=value
    	 	 },
    	 	 add:function (value) {
                       
    	 	 }

    	 }
    }
</script>
<style scoped>

     


    .index{padding-top: 0.8rem}
	.index_banner{width: 6.4rem;height: 3.32rem;}
	.index_banner img{width: 100%;height: 100%;}
	.fl{padding: 0.13rem 0.13rem 0;width: 6.14rem;height: 3.4rem;color: #fff;font-size: 0.24rem;}
	.fl div{overflow: hidden;}
	.fl a{color: #fff;}
	.sch_new{width: 3.03rem;height: 0.8rem;float:left;margin-right: 0.09rem;background: url(../images/bj1_05.png) center 0.54rem no-repeat #7dcc00;padding-top: 1.43rem;line-height: 1;text-align: center;background-size: 0.9rem 0.75rem;}	
	.jy .px,.jy .qz,.part{padding-left: 1.27rem;width: 1.75rem;height: 1.09rem;line-height: 1.09rem;}
	.jy{width: 3.02rem;height: 2.23rem;float:left;}
	.jy .px{margin-bottom: 0.05rem;background: url(../images/images/bj2222_03.png) 0.14rem center no-repeat #00CABE;background-size: 0.94rem 0.7rem;}
	.jy .qz{background: url(../images/images/bj56_57.png) 0.21rem center no-repeat #e89e1b;background-size: 0.81rem 0.83rem;}
	.tz{width: 1.96rem;height: 1.09rem;float: left;padding-left:1.06rem;margin-top: 0.09rem;
	      background: url(../images/bj3_14.png) 0.19rem center no-repeat #3F95EA;line-height: 1.09rem;background-size: 0.74rem 0.79rem;}
	.part{margin:0.09rem 0 0  0.1rem;float: left;background: url(../images/bj4_14.png) 0.26rem center no-repeat #51DB61;background-size: 0.72rem 0.69rem;}
	.index_new{padding: 0 0.13rem;width: 6.14rem;margin-top: 0.5rem;}
	.index_new_p{font-size: 0.3rem;color: #9a9a9a;line-height: 1;height: 0.3rem;background: url(../images/lb_22.png) 0.12rem -0rem no-repeat;
	            padding:0 0 0.12rem 0.53rem;background-size: 0.25rem 0.3rem;border-bottom: 1px solid #dedede;}	            
	 .index_new ul li{padding: 0.2rem 0 0.13rem;}
	 .index_new_ul li{overflow: hidden;border-bottom: 1px solid #9A9A9A;}
	 .index_new_img{width: 1.7rem;height: 1.45rem;float: left;margin-right: 0.2rem;border: none;}
	 .index_new_div{float: left;padding-top: 0.17rem;width: 4.24rem;}
	 .index_new_title{line-height: 1;color: #333;font-size:0.24rem;margin-bottom: 0.09rem;}
	 .index_new_conter{line-height:0.32rem;font-size: 0.16rem;color: #9a9a9a;margin-bottom: 0.16rem;height: 0.64rem;overflow: hidden;overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;}
	 .index_new_gn{overflow: hidden;}
	 .index_new_gn span{float: right;padding-left: 0.24rem;height: 0.18rem;line-height: 0.18rem;color: #666;font-size: 0.14rem;background-size: 0.18rem 0.18rem;cursor: pointer;}
	 .index_new_dz{background: url(../images/dz_25.png) left center no-repeat;margin-right: 0.33rem;}
	 .index_new_pl{background: url(../images/pl_28.jpg) left center no-repeat;margin-right: 0.05rem;}
	.index_new_ul li:last-child{border: none;}
	.index_new_dd{text-align: center;margin-top: 0.1rem;color: #666;font-size: 0.3rem;}


</style>
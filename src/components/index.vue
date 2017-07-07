<template>
	 <div class="index">
	 	  <headd headname="嘻哈校园"></headd>
	 	  <div>
	 	  	  <div class="index_banner">
	 	  	     <img src="../images/index_banner_02.jpg" alt="" />
	 	  	  </div>
	 	  </div>
	 	  <div class="fl">
	 	  	<router-link to="/hello">
	 	  	  <div class="sch_new">校园新闻</div></router-link>
	 	  	  <div class="jy">
	 	  	  	  <div class="px">教育培训</div>
	 	  	  	  <div class="qz">微圈子</div>
	 	  	  </div>
	 	  	  <div class="tz">跳蚤市场</div>
	 	  	  <div class="part">兼职吧</div>
	 	  </div>
	 	  <div class="index_new">
	 	  	  <p class="index_new_p">最新</p>
	 	  	  <ul>
	 	  	  	  <li></li>
	 	  	  	  <li></li>
	 	  	  </ul>
	 	  </div>
	 	  
	 	  

	 </div>
</template>
<script>
	import  headd from '@/components/headd.vue'
    export default{
    	 name:'index',
    	 components:{
    	 	 headd
    	 }
    }
</script>
<style>
	.index_banner{width: 6.4rem;height: 3.32rem;}
	.index_banner img{width: 100%;height: 100%;}
	.fl{padding: 0.13rem 0.13rem 0;width: 6.14rem;height: 3.4rem;color: #fff;font-size: 0.24rem;}
	.fl div{overflow: hidden;}
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
</style>
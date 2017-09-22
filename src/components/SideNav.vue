<template>
	 <div class="sideNav">
	 	     <div class="sideNav-top">
	 	     	  <img src="../images/use-tx_03.png" height="115" width="115" alt="">
	 	     	  <p>请登录</p>
	 	     </div>
             <ul class="side-ul">
             	 <li>
             	 	 
             	 	 	  校园新闻
             	 	   
             	 </li>
             	  <li>
             	 	 
             	 	 	  教育培训
             	 	   
             	 </li>
             	  <li>
             	 	 
             	 	 	  微圈子
             	 	   
             	 </li>
             	  <li>
             	 	 
             	 	 	  跳蚤市场
             	 	   
             	 </li>
             	  <li>
             	 	 
             	 	 	  兼职吧
             	 	   
             	 </li>
                  <li>
             	 	 
             	 	 	  个人中心
             	 	   
             	 </li>
             </ul> 
	 </div>
</template>

<script>
	
	export default{
         name:'sideNav',
         data(){
                    return{

                    }
         }
	}
</script>

<style scoped>
     .sideNav-top {width: 5.56rem;height: 1.99rem;background: url(../images/side-bg_02.jpg) 0 0 no-repeat;overflow: hidden;padding-left: 0.24rem}
     .sideNav-top img{float: left;width: 1.1rem;height: 1.1rem;margin: 0.45rem  0.3rem  0 0}
     .sideNav-top p{font-size: 0.3rem;color: #fff;line-height: 1.99rem;width: 3rem}
	   .sideNav{width: 5.8rem;position: absolute;top: 0.8rem;left: 0rem;}
	   .side-ul li{height: 1.05rem;line-height: 1.05rem;padding-left: 0.7rem;width: 3.9rem;position: relative;border-bottom :1px solid #ccc;margin-left: 0.6rem;font-size: 0.3rem;color: #333}
     .side-ul li a{font-size: 0.3rem;color: #333}
       .side-ul li:after{
       	        content: '';
                width:0.60rem;height: 0.6rem;position: absolute;left: -0.2rem;top: 0.3rem;
       }
        .side-ul li:before{
       	        content: '';
                width:0.17rem;height: 0.28rem;position: absolute;right: 0.12rem;top: 0.48rem;
                background: url(../images/side-dd_08.jpg) 0 0 no-repeat;background-size:100%;
       }
       .side-ul li:nth-child(1):after{
                background: url(../images/sidenav-img_03.jpg) 0 center no-repeat;background-size:100%;
       }
        .side-ul li:nth-child(2):after{
                background: url(../images/sidenav-img_06.jpg) 0 center no-repeat;background-size:100%;
       }
        .side-ul li:nth-child(3):after{
                background: url(../images/sidenav-img_08.jpg) 0 center no-repeat;background-size:100%;
       }

        .side-ul li:nth-child(4):after{
                background: url(../images/sidenav-img_10.jpg) 0 center no-repeat;background-size:100%;
       }
        .side-ul li:nth-child(5):after{
                background: url(../images/sidenav-img_12.jpg) 0 center no-repeat;background-size:100%;
       }
        .side-ul li:nth-child(6):after{
                background: url(../images/sidenav-img_14.png) 0 center no-repeat;background-size:100%;
       }

</style>
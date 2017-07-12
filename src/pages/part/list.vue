<template>
  <div class="hello">
  	   <!--<headd headname="嘻哈校园"></headd>-->
        <div class="top">
		 	 <a href="###" class="fh"></a>
		 	 <span class="sp1">列表</span>
		 	 <a href="###" class="yh"></a>
		 </div>
		 <div class="conter">
		 	  <div class="ss">
		 	  	 <input type="text"  placeholder="搜索你想要的" v-model="searchQuery"/>
		 	   	 <button>搜索</button>
			 </div>
			  <ul class="list">
			  	   <li v-for="item in filteredData">
			  	   	 <router-link :to="{name: 'demo1', params: { item: item.id }}" class="list_a">
			  	   	 	<img src="../../images/sctp_12.jpg" alt=""  class="list_img"/>
		                <div class="list_right">
		                	<p class="list_p_top">
		                		  <span class="sp1">{{item.name}}</span>
		                		  <span class="sp2">
		                		  	   <span class="sp2_col">￥{{item.money}}</span>
		                		  	   <span class="sp2_dw">/天</span>
		                		  </span>
		                	</p>
		                	<p class="list_p1">
		                		面试时间{{item.time}}
		                	</p>
		                	<p class="list_p2">
		                		面试时间{{item.dd}}
		                	</p>
		                </div>
			  	   	 <!--</a>-->
			  	   	 </router-link>
			  	   </li>
			  </ul>

		 </div>
		 
  </div>
</template>

<script>
import headd from '@/components/headd'
import  { jzxx } from '@/service/parttime'
import Vue from 'vue'
Vue.filter('filter1',function(value,myString){
	 
})



export default {
 	name: 'hello',
 	 	data() {
 	 	 	return {
 	 	 		 a:true,
 	 	 		 jzxx:jzxx,
 	 	 		 searchQuery:'',
 	 	 		 newval:111
 	 		}
 	 	},
 	 	components:{
 	 		  headd
 	 	},
 	 	filters: {
            capitalize: function (value) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
    },
    computed: {
        filteredData: function () {
            var self = this;
            return this.jzxx.filter(function (item) {
//              return item.name.toLowerCase().indexOf(self.searchQuery.toLowerCase()) !== -1;
                return item.dd.indexOf(self.searchQuery) !== -1 || item.time.toLowerCase().indexOf(self.searchQuery.toLowerCase()) !== -1;
            })
        }
    },
    created:function () {
	  this.$http.get('http://211.149.193.19:8080/api/customers').then(function(data){
	  	 console.log(data.bodyText)
	  	   console.log("bbb")
	  },function(err){
	  	  console.log(err)
	  	  console.log("aaa")
	  })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 *{margin: 0;padding: 0;font-family: "微软雅黑";list-style: none;}
	 .top{width: 6.4rem;height: 1rem;background-color: lightskyblue;position: relative;}
	 .top .fh{line-height: 1rem;color: #fff;width: 0.18rem;height: 0.31rem;background: url(../../images/grzx_fh_03.png) 0 0 no-repeat;margin-left: 0.1rem;background-size: 100% 100%;margin-top: 0.3rem;position: absolute;z-index: 100;}
	 .top .sp1{position: absolute;width: 100%;height: 100%;line-height: 1rem;z-index: 50;color: #fff;font-size: 0.34rem;text-align: center;}
   .top .yh{
      	   width: 0.34rem;height: 0.33rem;
      	   background: url(../../images/yh.png) 0px 0px no-repeat;background-size: 100% 100%;
      	   position: absolute;right: 0.27rem;top: 0.3rem;
      }
      .ss{width:6rem;margin: 0rem auto 0;overflow: hidden;}
      .ss input{width: 4.29rem;height: 0.54rem;border: 0.01rem solid #dedede;border-radius: 0.05rem;float: left;font-size: 0.34rem;color: #ccc;line-height: 0.54rem;padding-left: 0.19rem;}
      .ss button{float: left;margin-left: 0.09rem;border: none;height: 0.54rem;line-height: 0.54rem;color: #fff;padding: 0 0.3rem 0 0.6rem;border-radius: 0.1rem;font-size: 0.24rem;background: url(../../images/xx_ss_03.png) 0.16rem 0.15rem no-repeat #4c93eb;background-size: 0.27rem 0.29rem;}
      
      .list{width: 6.18rem;margin: 0.15rem auto 0;background-color: #fff;}
      .list li{padding: 0.15rem 0.03rem 0.1rem 0.03rem;border-bottom: 0.01rem solid #dedede;width: 98%;margin: 0 auto;overflow: hidden;}
      .list_img{width: 1.7rem;height: 1.17rem;float: left;}
      .list_right{float: left;overflow: hidden;font-size: 0.24rem;margin-left: 0.15rem;width: 4.2rem;}
      .list_p_top{padding-top: 0.1rem;line-height: 1;margin-bottom: 0.24rem;}
      .list_p_top .sp1{font-size: 0.24rem;color: #333;}
      .list_p_top .sp2{float: right;}
      .list_p_top .sp2 .sp2_col{color: #ff6600;}
      .conter{background-color: #f6f6f6;padding-top: 0.12rem;}
      .list_p1{background: url(../../images/jz_sj_03.png) 0.04rem center no-repeat;padding-left: 0.27rem;background-size: 0.18rem 0.18rem;font-size: 0.16rem;color: #9a9a9a;margin-bottom: 0.03rem;}
      .list_p2{background: url(../../images/jz_dd_03.png) 0.04rem center no-repeat;padding-left: 0.27rem;background-size: 0.18rem 0.18rem;font-size: 0.16rem;color: #9a9a9a;}
      .list_a{display: block;overflow: hidden;}
      .bgg{background-color: aqua;}
</style>

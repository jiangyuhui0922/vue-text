<template>
	 <div class="head">
	 	 <div class="ml" v-on:click="addd">
	 	 	  <p></p>
	 	 	  <p class="p2"></p>
	 	 	  <p></p>
	 	 </div>
	 	 <div class="name">{{headname}}</div>
	 	 <div class="login">
	 	 	
	 	 </div>
	 </div>
</template>
<script>
	export default {
		name:'head',
		props: ['headname'],
		data (){
			return {
//				 headname:'123456',
                hhh:true
			}
			
		},
		methods:{
                        addd:function () {
                                  this.hhh=!this.hhh
                                  var value=this.hhh
                                  this.$emit('sjj',value)
                        }
		}
	}
</script>
<style>
	.head{width: 6rem;height: 0.8rem;background-color: #4C93EB;padding: 0 0.2rem;position: fixed;top: 0;z-index: 100;}
    .ml{position: absolute;width: 0.4rem;height: 0.24rem;padding-top: 0.28rem;}
    .ml p{width: 100%;height: 0.04rem;background-color: #fff;}
    .ml .p2{margin: 0.06rem 0;}
    .name{font-size: 0.2rem;color: #fff;text-align: center;line-height: 0.8rem;}
    .login{width: 0.34rem;height: 0.33rem;background: url(../images/yh.png) 0 0 no-repeat;background-size: cover;position: absolute;top: 0.23rem;right: 0.2rem;}
</style>
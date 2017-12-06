<template>
	<div class="demo1">

    
	<div v-for="item in jzxx" v-if="item.id==demo">
		  <p class="sp1">{{item.name}}</p>
		  <p class="sp_time">面试时间{{item.time}}</p>
		  <p class="sp_dd">面试地点{{item.dd}}</p>
		  
	</div>
	</div>	
</template>

<script>
	import  {jzxx} from '@/service/parttime'
	export default {
		name: 'demo1',
		data() {
			return {
				text1:'123456',
				jzxx:jzxx,
				demo:'',
				title:""
			}
		},
		methods:{
			 cli(){
			 	  console.log(this.$route.params.item)
			 	  this.demo=this.$route.params.item
			 }
		},
		created: function () {
 						this.demo=this.$route.params.item
            },
	}
</script>
<style type="text/css">
	
	.sp1,.sp_time,.sp_dd{font-size: 0.16rem;}
</style>

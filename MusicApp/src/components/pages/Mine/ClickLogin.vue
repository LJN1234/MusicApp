<template>
	<div class="denglu">
		<router-link to="/Login" >
		<div class="use-ico"></div>
		{{disc}} 
		 </router-link>
	</div>
</template>

<script>
	export default{
	name:'BottomBtn2',
	components:{},
	data(){
		return {
			disc:"点击登录"
		}

	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.denglu{
	/*.mg(100,0,0,0);*/
	.h(85);
	 line-height: 85px;
   	 background-color: #ccc;
   	 .fs(16);
   	 .use-ico{
   	 	 .w(60);
   	 	 .h(60);
   	 	 float:left;
   	 	/*border-radius: 50%;*/
   	 	/*border:1px solid #ccc;*/
   	 	.mg(15,10,0,10);
   	 	background-image: url(../../../../static/images/ico.png);
   	 	background-position: -191px -148px;
   	 }
}
</style>
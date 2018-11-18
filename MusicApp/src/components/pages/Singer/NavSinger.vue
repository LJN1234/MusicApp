<template>
	<div class="Singer">
		<ul v-show='show'>
			<li></li>
		</ul>
		<div class="mask" v-show="show"></div>
	</div>
</template>

<script>
	export default{
	name:'BottomBtn2',
	components:{},
	props:['show'],
	data(){
		return {
			
			disc:"歌手榜单",
			
		}

	},

}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.Singer{
 background: skyblue;
 ul{
 	.h(360);
 	position:fixed;
 	.b(0);
 	.l(0);
 	.r(0);
 	z-index:999;
 	background:skyblue;
 }
 .mask{
 	
 	position:fixed;
 	.t(0);
 	.l(0);
 	.r(0);
 	background:rgba(0,0,0,.5);
 }
	
}
</style>-->
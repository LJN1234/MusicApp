<template>
	<div class="login">
		{{disc}}
	</div>
</template>

<script>
	export default{
	name:'BottomBtn2',
	components:{},
//	props:'',
	data(){
		return {
			disc:"登录"
		}

	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.login{
	background:red;
	.mg(200,0,0,0);
}
</style>
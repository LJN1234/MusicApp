<template>
	<div id="listTitle">
		<div class="titleCon">
			<i class="fa fa-hand-o-left"  @click="back"></i>
			<h3>{{title}}</h3>
		</div>
	</div>
</template>

<script>
	export default{
		name:'LisTitle',
		props:{
			title: {
				type: String
			}
		},
		methods: {
			back () {
				this.$router.back(-1)
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';

	#listTitle{
		.w(375);
		.h(54);
		.lh(54);
		background: rgb(13, 148, 125);
		.titleCon{
			.w(355);
			.h(54);
			.mg(0,10,0,10);
			display: flex;
			i{
				display: inline-block;
				.w(30);
				.h(30);
				.lh(54);
				.fs(30);
			}
			h3{
				display: inline-block;
				flex:1;
				.fs(18);
				.mg(0,0,0,20);
			}
		}
	}
</style>
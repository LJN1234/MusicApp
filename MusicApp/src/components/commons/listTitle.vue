<template>
	<div id="listTitle" :style="{background:title.bg}">
		<div class="titleCon">
			<i class="fa fa-chevron-left"  @click="back"></i>
			<h3>{{title.title}}</h3>
		</div>
	</div>
</template>

<script>
	export default{
		name:'LisTitle',
		props:{
			title: {
				type: Object
			}
		},
		methods: {
			back () {
				this.$router.history.go(this.title.num)
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
		color:#fff;
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
				.fs(20);
			}
			h3{
				display: inline-block;
				flex:1;
				.fs(18);
				.mg(0,0,0,10);
			}
		}
	}
</style>
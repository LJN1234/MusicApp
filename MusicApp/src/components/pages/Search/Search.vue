<template>
	
	<div id="search">
		<HotSong></HotSong>
		<NewSong></NewSong>
	</div>
	
</template>

<script>
import HotSong from './HotSong'//引入组件
import NewSong from './NewSong'//引入组件

export default{
	name:'Search',
	components:{HotSong,NewSong}
}
</script>

<style lang="less" scoped>
@import "../../../styles/main.less";
	#search{
		.w(375);
		.pd(100,10,10,0);
		box-sizing: border-box;
	}
</style>
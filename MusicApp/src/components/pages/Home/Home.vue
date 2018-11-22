<template>
	
	<div id="home">
		<Banner></Banner>
		<Song></Song>
		<MV></MV>
	</div>
	
</template>

<script>
import Banner from '../../commons/Banner'//引入组件
import MV from './MV'//引入组件
import Song from './Song'//引入组件

export default{
	name:'Home',
	components:{Banner,MV,Song}
}
</script>

<style>
	#home{
		width: 375px;
		height: 300px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
</style>
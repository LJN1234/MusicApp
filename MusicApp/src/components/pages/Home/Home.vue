<template>
	
	<div id="home">
		<Banner></Banner>
		<Popular></Popular>
		<Recommend></Recommend>
	</div>
	
</template>

<script>
import Banner from '../../commons/Banner'//引入组件
import Popular from './Popular'//引入组件
import Recommend from './Recommend'//引入组件

export default{
	name:'Home',
	components:{Banner,Popular,Recommend}
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
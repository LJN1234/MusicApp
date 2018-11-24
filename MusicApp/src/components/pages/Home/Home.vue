<template>
	
	<div id="home">
		<Header></Header>
   		 <Nav></Nav>
		<Banner></Banner>
		<Song></Song>
		<Sole></Sole>
		<MV></MV>
	</div>
	
</template>

<script>
import Header from '../../commons/Header'//引入组件
import Nav from '../../commons/Nav'//引入组件
import Banner from '../../commons/Banner'//引入组件
import Sole from './Sole'//引入组件
import Song from './Song'//引入组件
import MV from './MV'//引入组件

export default{
	name:'Home',
	components:{Header,Nav,Banner,MV,Song,Sole}
}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	
	#home{
		.pd(100,0,80,0);
	}
</style>
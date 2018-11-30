<template>
	<div id="singer">
		<Header></Header>
   		<Nav></Nav>
		<HotSinger></HotSinger>

	</div>
</template>

<script>
import HotSinger from './HotSinger'//引入组件
import Header from '../../commons/Header'//引入组件
import Nav from '../../commons/Nav'//引入组件
export default{
	name:'Singer',
	components:{Header,Nav,HotSinger},
	data(){
		return {
			
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
#singer{
	.pd(100,0,80,0)
}
</style>
<template>
	<div id="singer">
		<HotSinger></HotSinger>

	</div>
</template>

<script>
import HotSinger from './HotSinger'//引入组件
//import SingerType from './SingerType'//引入组件



export default{
	name:'Singer',
	components:{HotSinger},
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
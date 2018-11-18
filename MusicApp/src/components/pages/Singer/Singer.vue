<template>
	<div id="singer">
		<SingerType></SingerType>
		<HotSinger></HotSinger>
		
		
	</div>
</template>

<script>
import HotSinger from './HotSinger'//引入组件
import SingerType from './SingerType'//引入组件



export default{
	name:'Singer',
	components:{HotSinger,SingerType},
	data(){
		return {
			
		}

	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

#singer{
	/*background: deepskyblue;*/
}
</style>
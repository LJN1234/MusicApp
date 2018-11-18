<template>
	<div id="type">
		<HotType></HotType>
		<AllType></AllType>
	</div>
</template>

<script>
import HotType from './HotType'//引入组件
import AllType from './AllType'//引入组件

export default{
	name:'Type',
	components:{HotType,AllType},
	data(){
		return {
			
		}

	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

#type{
	background: blueviolet;
}
</style>
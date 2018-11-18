<template>
	<div id="mine">
		<Info></Info>
		<Collection2></Collection2>	
	</div>
</template>

<script>
import Info from './Info'//引入组件
import Collection2 from './Collection2'//引入组件


export default{
	name:'Mine2',
	components:{Info,Collection2},
	data(){
		return {
			
		}

	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

#mine2{
	background: lightblue;
}
</style>
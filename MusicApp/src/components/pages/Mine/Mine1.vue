<template>
	<div id="mine1">
		<ClickLogin></ClickLogin>
		<Collection1></Collection1>
		
	</div>
</template>

<script>
import ClickLogin from './ClickLogin'//引入组件
import Collection1 from './Collection1'//引入组件

export default{
	name:'Mine1',
	components:{ClickLogin,Collection1},
	data(){
		return {
			
		}

	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

#mine1{
	.mg(100,0,0,0);
	/*background: #fff;*/
}
</style>
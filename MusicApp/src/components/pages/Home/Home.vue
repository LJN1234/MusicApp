<template>
	
	<div id="home">
		<Banner></Banner>
		<Song></Song>
		<Sole></Sole>
		<MV></MV>
	</div>
	
</template>

<script>
import Banner from '../../commons/Banner'//引入组件
import Sole from './Sole'//引入组件
import Song from './Song'//引入组件
import MV from './MV'//引入组件

export default{
	name:'Home',
	components:{Banner,MV,Song,Sole},
	created:function () {
            this.$emit('public_header', true);
            this.$emit('public_nav', true);
            this.$emit('public_audio', true);
    }
}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	
	#home{
		.pd(100,0,80,0);
	}
</style>
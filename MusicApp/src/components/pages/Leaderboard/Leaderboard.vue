<template>
	<div id="leaderList">
		<LeaderList></LeaderList>
	</div>
</template>

<script>
import LeaderList from './LeaderList'//引入组件

export default{
	name:'Leaderboard',
	components:{LeaderList},
	data(){
		return {
			
		}

	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

#leaderList{
	/*background: blue;*/
}
</style>
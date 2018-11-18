
<template>
	<div id="mine">
	    <router-view></router-view>
	</div>
</template>


<script>
	
	export default{
		name:'Mine',
		data(){
            return {
            	title:'我的界面'
            }
		},
		components:{}
    }

</script>
<style lang="less" scoped>
@import '../../../styles/main.less';	
#mine{
	background: darkblue;
}

</style>
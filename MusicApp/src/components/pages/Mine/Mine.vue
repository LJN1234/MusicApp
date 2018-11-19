
<template>
	<div id="mine">
	    <router-view></router-view>
	    <Mine1></Mine1>
	</div>
</template>


<script>
import Mine1 from './Mine1'
	export default{
		name:'Mine',
		data(){
            return {
            	title:'我的界面'
            }
		},
		components:{Mine1}
    }

</script>
<style lang="less" scoped>
@import '../../../styles/main.less';	
#mine{
	/*background: #fff;*/
}

</style>
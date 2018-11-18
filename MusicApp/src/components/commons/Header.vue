<template>
	<div id="header">
	   <div class='con'>
			<div class='left' @click='toshow'>
				<div class='nav-icon'>
					<i class="fa fa-bars"></i>
				</div>
				<div class='title'>某某音乐</div>
			</div>
			<div class='right'>
				<div class='search-icon'>
	              <i class="fa fa-search"></i>
				</div>
				<div class='user-icon'>
					<i class="fa fa-user-o"></i>
				</div>
			</div>
		</div>
		<!--<Aside :show='isShow' @close='closeSlider'></Aside>-->
	</div>
</template>

<script>
import  Aside from './Aside.vue'
	
	export default{
		name:"Header",
		component:{Aside},
		data(){
			return {
				isShow:true
			}
		},
		methods:{
			toshow(){
				this.isShow=!this.isShow
			},
			closeSlider(){
				this.isShow=false
			}
		}
	}
</script>

<style lang="less" scoped>
@import url("../../styles/main.less");
	
	#header{
		.w(375);
		.h(54);
		.lh(54);
		position: fixed;
		.t(0);
		.r(0);
		.l(0);
	    z-index: 1000;
	    background: green;
	    .con{
	    	display: flex;
	    	justify-content: space-between;
	    	.left,.right{
	    		display: flex;
	    		justify-content: space-between;
	    		align-items:center;
	    		align-content:center;
	    		.fs(16);
	    		color: #fff;
	    	}
	    	.left{
	    		.nav-icon{
	    			.w(54);
					.h(54);
					.lh(54);
					text-align:center;
	    		}
	    		.title{
	    			width:auto;
					.h(54);
					.lh(54);
					text-align:center;
	    		}
	    	}
	    	.right{
	    		.search-icon,.user-icon{
	    			.w(54);
					.h(54);
					.lh(54);
					text-align:center;
	    		}
	    	}
	    }
	    
	}	
</style>
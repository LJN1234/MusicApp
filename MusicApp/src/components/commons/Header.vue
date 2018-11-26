<template>
	<div id="header">
	   <div class='con'>
			<div class='left' @click="isShow">
				<div class='nav-icon'>
					<i class="fa fa-bars"></i>
				</div>
				<div class='title'>某某音乐{{show}}</div>
			</div>
		</div>
		<Aside :show="show" @close="closeAside"></Aside>
		<Aside></Aside>
	</div>
</template>

<script>
import  Aside from './Aside.vue'
	
	export default{
		name:"Header",
		components:{Aside},
		data(){
			return {
				// show:false
			}
		},
		computed:{
			show(){
				return this.$store.state.isShowAside;
			}
		},
		methods:{
			isShow(){
//				this.show=!this.show;
				let show = !this.$store.state.isShowAside;
				this.$store.commit('chageShowAside',show)
				
			},
			closeAside(){
				this.show=false;
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
	    background: rgb(13, 148, 125);
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
	    }
	    
	}	
</style>
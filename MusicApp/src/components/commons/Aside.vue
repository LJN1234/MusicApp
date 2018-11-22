<template>
	<div id="aside">
		<div class="nav">
			<transition enter-active-class='animated slideInLeft' leave-active-class='animated slideOutLeft'>
				<div class="con" v-show="show">
					<div class="myInfo">
						<i class="fa fa-user-circle-o"></i>
						<span>1885464546</span>
					</div>
					<ul>
						<li  @click='goPage(item.path)' 
					       	 v-for='(item,index) in navList' :key='index'>
	                            {{item.title}}
								<i class="fa fa-angle-right"></i>
						</li>
					</ul>
					<button class="fa fa-sign-out">退出</button>
				</div>
			</transition>
			<transition enter-active-class='animated fadeIn' leave-active-class='animated fadeOut'>
	       		<div class='mask' v-show="show"></div>
	        </transition>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Aside',
		components: {},
		computed:{
			show(){
				return this.$store.state.isShow
			}
		},
		data() {
			return {
				navList:[
						{title:'首页',path:'/home',name:'Home'},
						{title:'推荐',path:'/recommend',name:'Recommend'},
						{title:'歌手',path:'/singer',name:'Singer'},
						{title:'榜单',path:'/leaderboard',name:'Leaderboard'},
						{title:'我的',path:'/mine',name:'Mine'}]
						
			}
		},
		methods:{
			goPage(path){
				this.$store.commit('chageShow',false)
				  this.$router.push({ path: `${path}`, params: { userId: 123 }})

			}
		}
	}
</script>

<style lang="less" scoped>
@import "../../styles/main.less";
	#aside{
		.nav{
			position:fixed;
			.t(100);
			.l(0);
			.r(110);
			.con{
				.w(265);
				.h(617);
				background: #fff;
				z-index:9999;
				.myInfo{
				.w(265);
				.h(50);
				color:#000;
				.fs(20);
				.pd(0,0,0,20);
				i{
					.fs(30);
				}
				span{
					.pd(0,0,0,20);
				}
			}
			ul{
		 		li{
		 			display: flex;
		 			justify-content: space-between;
		 			align-items: center;
		 			box-sizing: border-box;
		 			.pd(0,20,0,30);
		 			.fs(14);
		 			.h(50);
		 			border-bottom: 1px dotted #333;
		 		}
		 	}
		 	button{
		 		.fs(20);
		 		background: #fff;
		 		position: fixed;
		 		.b(10);
		 		.r(120);
		 	}
			}
			.mask{
				z-index:-2000;
		 		position: fixed;
		 		.t(100);
		 		.b(0);
		 		.l(0);
		 		.r(0);
		 		background: rgba(0,0,0,.4);
		 	}
		}
	}
</style>
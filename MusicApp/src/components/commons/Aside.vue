<template>
	<div id="aside">
		<div class="nav">
			<transition enter-active-class='animated slideInLeft' leave-active-class='animated slideOutLeft'>
				<ul v-show='show'>
					<router-link tag='li' :to='{path:item.path}' 
				       	 v-for='(item,index) in navList' :key='index' class="clearfix">
                            {{item.name}}
							<i class="fa fa-angle-right"></i>
					</router-link>
				</ul>
			</transition>
			<!--<transition enter-active-class='animated fadeIn' leave-active-class='animated fadeOut'>
	       		<div class='mask' v-show='show'></div>
	        </transition>-->
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Aside',
		components: {},
		props:['show'],
		data() {
			return {
				navList:[{name:'首页',path:'/home'},
						{name:'影片',path:'/movie'},
						{name:'影院',path:'/min'},
						{name:'商城',path:'/home'},
						{name:'我的',path:'/movie'},
						{name:'卖座卡',path:'/min'}
				],
			}
		}
	}
</script>

<style lang="less" scoped>
@import "../../styles/main.less";
	#aside{
		.nav{
			.w(265);
			.h(617);
			position:fixed;
			.t(50);
			.l(0);
			.r(110);
			z-index:2000;
			background: #282828;
			ul{
		 		position: fixed;
		 		.t(50);
		 		.l(0);
		 		.r(110);
		 		.b(0);
		 		z-index:999;
		 		li{
		 			display: flex;
		 			justify-content: space-between;
		 			align-items: center;
		 			box-sizing: border-box;
		 			padding: 0px 16px;
		 			.fs(14);
		 			color:#fff;
		 			.h(50);
		 			border-bottom: 1px dotted #fff;
		 		}
		 	}
			.mask{
		 		position: fixed;
		 		.t(50);
		 		bottom:0;
		 		left:0;
		 		right: 0;
		 		background: rgba(0,0,0,.4);
		 	}
		}
	}
</style>
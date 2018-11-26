<template>
	<div id="aside">
		<div class="nav">
			<transition enter-active-class='animated slideInLeft' leave-active-class='animated slideOutLeft'>
				<div class="con" v-show="show">
					<div class="myInfo">
						<div v-if="state">
							<i class="fa fa-user-circle-o"></i>
							<span></span>
						</div>
						<div v-else>
							<router-link to='/reg' class="zhuce">注册</router-link>
							<router-link to='/login' class="denglu">登录</router-link>
						</div>
					</div>
					<ul>
						<li  @click='goPage(item.path)' 
					       	 v-for='(item,index) in navList' :key='index'>
	                            {{item.title}}
								<i class="fa fa-angle-right"></i>
						</li>
					</ul>
					<!-- <button class="fa fa-sign-out">退出</button> -->
					<button class="fa fa-sign-out" @click="loginOut">退出</button>
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
				return this.$store.state.isShowAside
			}
		},
		data() {
			return {
				login:'',
				state:'',
				navList:[
						{title:'首页',path:'/home',name:'Home'},
						{title:'我的收藏',path:'/recommend',name:'Recommend'},
						{title:'我喜欢',path:'/singer',name:'Singer'},
						{title:'我的',path:'/leaderboard',name:'Leaderboard'},
						{title:'设置',path:'/mine',name:'Mine'}]
						
			}
		},
		methods:{
			goPage(path){
				this.$store.commit('chageShowAside',false)
				this.$router.push({ path: path})
			},
			loginOut(){
				this.$store.commit('chageLogin',false)
				this.$router.replace('/login')
			}
		},
		created(){
			if (this.$store.state.login) {
				console.log(this.$store.state.login)
				this.login=1
			}
			if(this.login=1){
				this.state=true
			}else{
				this.state=false
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
					display:flex;
				.w(265);
				.h(50);
				color:#000;
				.fs(20);
				.pd(0,0,0,20);
				i{
					.fs(30);
					.mg(10,0,0,0);
					color:blue;
				}
				span{
					.pd(0,0,0,20);
				}
				.zhuce{
				.h(34);
				.w(73);
				text-align:center;
				.lh(34);
				background:#EEE;
				.mg(10,10,0,20);
				}
				.denglu{
					.h(34);
					.w(73);
					text-align:center;
					.lh(34);
					background:#EEE;
					.mg(10,20,0,10);
				}
			}
			ul{
				.pd(20,0,0,0);
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
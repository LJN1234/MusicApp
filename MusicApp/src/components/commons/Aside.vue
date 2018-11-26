<template>
	<div id="aside">
		<div class="nav">
			<transition enter-active-class='animated slideInLeft' leave-active-class='animated slideOutLeft'>
				<div class="con" v-show="show">
					<div class="myInfo">
						<div v-if="login=='true'" class="isTrue">
							<i class="fa fa-user-circle-o"></i>
							<span class="userName">{{userName}}</span>
						</div>
						<div v-else @click="closeAside" class="isFalse">
							<p>
								<a class="zhuce" @click="goReg">注册</a>
								<a  @click="goLogin" class="denglu">登录</a>
							</p>
						</div>
					</div>
					<ul class="navCon">
						<li  @click='goPage(item.path)' 
					       	 v-for='(item,index) in navList' :key='index'>
	                            {{item.title}}
								<i class="fa fa-angle-right"></i>
						</li>
					</ul>
					<button  v-if="login=='true'" class="fa fa-sign-out" @click="loginOut">退出</button>
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
				userName:'',
				navList:[
						{title:'首页',path:'/home',name:'Home'},
						{title:'我的收藏',path:'/recommend',name:'Recommend'},
						{title:'我喜欢',path:'/singer',name:'Singer'},
						{title:'我的',path:'/leaderboard',name:'Leaderboard'},
						{title:'设置',path:'/mine',name:'Mine'}]
						
			}
		},
		methods:{
			goReg(){
				this.$router.push({ path: '/reg'})
			},
			goLogin(){
				this.$router.push({ path: '/login'})
			},
			goPage(path){
				this.$store.commit('chageShowAside',false)
				this.$router.push({ path: path})
			},
			isLogin(){
				if (this.$store.state.login) {
					console.log(this.$store.state.login)
					this.login='true'
					this.userName=window.localStorage.getItem('userName')
				}
			},
			loginOut(){
				var res = confirm("您确定要退出吗？")
				if(res){
					window.localStorage.setItem('login',false)
					window.localStorage.removeItem('userName')
					this.$router.replace('/login')
				}
			},
			closeAside(){
				this.$store.commit('chageShowAside',false)
			}
		},
		created(){
			this.isLogin()
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
					.h(55);
					color:#000;
					.fs(20);
					.pd(0,0,0,30);
					.isTrue{
						i{
							.fs(30);
							.mg(10,0,0,0);
							color:blue;
						}
						span{
							.pd(0,0,0,20);
						}
					}
					.isFalse{
						.w(375);
						.h(35);
						.lh(35);
						.mg(10,0,10,0);
						p{
							.w(200);
							.h(35);
							.lh(35);
							display: flex;
							justify-content: space-around;
							a{
								display: block;
								.w(90);
								.h(35);
								.lh(35);
								text-align:center;
								background:#EEE;
							}
						}
					}
					
				}
				.navCon{
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
<template>
	<div class="reg">
			<div class="contain">
		<div class="zc">
		<h3>注册</h3>
		</div>
		<div class="text">
			<input type="text" v-model="userName" placeholder="手机号/邮箱" class="num"/>
			<div class="yanzhengma">
				<input type="text" class="code" placeholder="动态验证码"/>
				<div> 获取验证码</div>
			</div>
			<div class="pass">
			<input type="password" v-model="userPass" placeholder="密码"/>
			<input type="password" name="" value="" placeholder="确认密码"/>
			</div>
			<div class="forget">
			<input type="checkbox" name=""  value="" /><span>我已阅读并同意</span>
			<span class="zhanghu" @click="goLogin">已有账户,前往登陆</span>
		</div>
		<input type="button" @click="saveUser" value="注册"  class="dianji"/>
		</div>
		</div>
	</div>
</template>

<script>
	export default{
	name:'Reg',
	components:{},
	data(){
		return {
			user:{
				userName:'',
				userPass:''
			}
		}

	},
	methods:{
		goLogin(){
			this.$router.push({ path: '/login'})
		},
		saveUser(){
			this.user.userName=this.userName
			this.user.userPass=this.userPass
			this.user=JSON.stringify(this.user)
			window.localStorage.setItem('user',this.user)
		}
	},
	created(){
		
	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.reg{
	/*background:red;*/
	.mg(100,0,0,0);
	.zc{
		text-align: center;
		.lh(60);
		.fs(18);
	}
	.text{
		.w(340);
		.mg(0,0,0,20);
		.lh(44);
			.num{
				.w(330);
				.h(44);
				border:1px solid #666;
			}
			.yanzhengma{
				.mg(10,0,0,0);
				.w(330);
				.h(44);
				border:1px solid #666;
				display:flex;
				input{
					.w(200);
					border:none;
					.lh(44);
				}
				div{
					border-left:1px solid #ccc;
					.fs(14);
					.lh(44);
					
					color:cornflowerblue;
				}
			}
		
			.pass{
				.w(330);
				/*.mg(0,0,0,0);*/
				input{
					.w(330);
					.h(44);
					border:1px solid #666;
					.mg(20,0,0,0);
				}
			}
			.forget{
				.w(300);
				.mg(40,0,10,10);
			
				color: cornflowerblue;
				.fs(12);
				.zhanghu{
					float: right;
				}
			}
	
		.dianji{
			.w(300);
			.h(38);
			.mg(0,0,10,10);
			background: cornflowerblue;
			color:#fff;
			.fs(14);
		}
	}
		
}
</style>
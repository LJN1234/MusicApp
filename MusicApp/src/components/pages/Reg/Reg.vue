<template>
	<div class="reg">
			<div class="contain">
		<div class="zc">
		<h3>注册</h3>
		</div>
		<div class="text">
<<<<<<< HEAD
			<input type="text" v-model="userName" placeholder="手机号/邮箱" class="num"/>
=======
			<div class="phone">
			<i class="fa fa-mobile" aria-hidden="true"></i>
			<input type="text" name=""  value="" placeholder="手机号/邮箱" class="num"/>
			</div>
>>>>>>> 5da3e1f756db598afedff3a4251aa5811a923d7e
			<div class="yanzhengma">
				<input type="text" class="code" placeholder="动态验证码"/>
				<div> 获取验证码</div>
			</div>
			<div class="pass">
<<<<<<< HEAD
			<input type="password" v-model="userPass" placeholder="密码"/>
=======
				<i class="fa fa-lock" aria-hidden="true"></i>
			<input type="password" name="" value="" placeholder="密码"/>
			</div>
			<div class="pass">
				<i class="fa fa-lock" aria-hidden="true"></i>
>>>>>>> 5da3e1f756db598afedff3a4251aa5811a923d7e
			<input type="password" name="" value="" placeholder="确认密码"/>
			</div>
			<div class="forget">
			<input type="checkbox" name=""  value="" /><span>我已阅读并同意</span>
<<<<<<< HEAD
			<span class="zhanghu" @click="goLogin">已有账户,前往登陆</span>
		</div>
		<input type="button" @click="saveUser" value="注册"  class="dianji"/>
=======
			 <router-link to="/login"><span class="zhanghu">已有账户</span></router-link> 
		</div>
		<input type="button" name="" id="" value="注册"  class="dianji"/>
>>>>>>> 5da3e1f756db598afedff3a4251aa5811a923d7e
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
<<<<<<< HEAD
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
=======
	 created:function () {
            this.$emit('public_header', false);
             this.$emit('public_nav', false);
              this.$emit('public_radio', false);
    }
>>>>>>> 5da3e1f756db598afedff3a4251aa5811a923d7e
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.reg{
	/*background:red;*/
	background-image:url('../../../../static/images/tiankong.jpg');
	.pd(0,0,100,0);
	.zc{
		.pd(100,0,0,0);
		text-align: center;
		.lh(60);
		.fs(18);
	}
	.text{
		
		.w(340);
		.mg(0,0,0,20);
		.lh(44);
			.phone{
				position:relative;
				i{
					position: absolute;
					.l(5);
					.t(17);
					.fs(22);
					color:#ccc;
				}
				
				.num{
					.pd(0,0,0,30);
					.w(330);
					.h(44);
					border:1px solid #666;
				
				}
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
					.pd(0,0,0,30);
				}
				div{
					border-left:1px solid #ccc;
					.fs(14);
					.lh(44);
					.w(128);
					background:#CDC9A5;
					color:blue;
					text-align:center;
				}
			}
		
			.pass{
				.w(330);
				position:relative;
				i{
					position: absolute;
					.l(5);
					.t(30);
					.fs(22);
					color:#ccc;
				}
				
				input{
					.w(330);
					.h(44);
					.pd(0,0,0,35);
					border:1px solid #666;
					.mg(20,0,0,0);
				}
			}
			.forget{
				.w(300);
				.mg(40,0,10,10);
			
				color:#1874CD;
				.fs(12);
				.zhanghu{
					float: right;
					color:#1874CD;
				}
			}
	
		.dianji{
			.w(300);
			.h(38);
			.mg(0,0,10,10);
			background:#3A5FCD;
			color:#fff;
			.fs(14);
			.border-radius(80);
		}
	}
		
}
</style>
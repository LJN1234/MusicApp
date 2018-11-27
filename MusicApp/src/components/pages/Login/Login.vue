<template>
	<div class="login">
		<div class="contain">
			<div class="dl">
				<i> 登录</i>
			</div>
		
		<div class="phone">
			<i class="fa fa-mobile" aria-hidden="true"></i>
			<input type="text" v-model=" userName" name=""  value="" placeholder="手机号/邮箱" class="num"/>
		</div>
		<div class="pass">
				<i class="fa fa-lock" aria-hidden="true"></i>
			<input type="password" v-model="userPass"  name="" value="" placeholder="确认密码"/>
		</div>
		<div class="forget">
			<span>忘记密码</span>
			<span @click="goReg">用户注册</span>
		</div>
		<input type="button" name="" id="" value="登录"  class="dianji"/>
	</div>
	</div>
</template>

<script>
	export default{
	name:'BottomBtn2',
	components:{},
	data(){
		return {
			userName:'',
			userPass:'',
			user:{}
		}

	},
	methods:{
		login(){	
			this.user=JSON.parse(window.localStorage.getItem('user'))
			console.log(this.user)
			if(this.userName && this.userPass){
				if(this.userName==this.user.userName ){
					console.log(111)
					if(this.userPass==this.user.userPass){
						window.localStorage.setItem('login',true)
						window.localStorage.setItem('userName',this.userName)
						this.$router.replace('/home')
					}else{
						alert("密码错误")
					}
				}else{
					alert("用户名错误")
				}
			}else{
				alert("用户名或密码不能为空")
			}
		},
		goReg(){
			this.$router.push({ path: '/reg'})
		}
	},
	 created:function () {
            this.$emit('public_header', false);
            this.$emit('public_nav', false);
            this.$emit('public_radio', false);
    }

}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.login{
	/*background:red;*/
	/*height:100%;*/
	/*background-image:url('../../../../static/images/tiankong.jpg');*/
	.pd(0,0,200,0);
	.dl{
		.pd(20,0,30,0);
		text-align: center;
		.lh(60);
		.fs(20);
		/*color:#999;*/
		/*font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;*/

		
	}
	.phone{
		.mg(0,0,0,20);
		position:relative;
		i{
		position: absolute;
		.l(5);
		.t(17);
		.fs(25);
		color:#ccc;
		}
				
		.num{
			.pd(0,0,0,30);
			.w(330);
			.h(44);
			border:1px solid #ccc;
			.border-radius(5);	
		}
	}
	.pass{
		.w(330);
		.mg(20,0,0,20);
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
			border:1px solid #ccc;
			.mg(20,0,0,0);
			.border-radius(5);
		}
	}
	.forget{
		.w(300);
		.mg(40,0,10,30);
		display: flex;
		justify-content: space-between;
		
		.fs(12);
		span{
			color: #1874CD;
		}
	}

	.dianji{
		.w(150);
		.h(38);
		.mg(40,0,0,110);
		.border-radius(20);
		background: #3A5FCD;
		color:#fff;
		.fs(14);
	}
}
</style>
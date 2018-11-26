<template>
	<div class="login">
		<div class="contain">
			<div class="dl">
				<i> 登录</i>
			</div>
		
		<input type="text" name=""  value=""  placeholder="手机/邮箱"/><br />
		<input type="text" name=""  value=""  placeholder="密码"/>
		</div>
		<div class="forget">
			<span>忘记密码</span>
			<span>用户注册</span>
		</div>
		<input type="button" @click="login" value="登录"  class="dianji"/>
	</div>
</template>

<script>
	export default{
	name:'Login',
	components:{},
//	props:'',
	data(){
		return {
			
		}

	},
	methods:{
		login(){
			window.localStorage.setItem('login',true)
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.login{
	/*background:red;*/
	.mg(100,0,0,0);
	.dl{
		text-align: center;
		.lh(60);
		.fs(16);
		color:#999;
		font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;

		
	}
	input{
		.w(330);
		.h(44);
		border:1px solid #666;
		.mg(10,0,10,20);
		
	}
	.forget{
		.w(320);
		.mg(40,0,10,30);
		display: flex;
		justify-content: space-between;
		color: cornflowerblue;
		.fs(12);
	}

	.dianji{
		.w(150);
		.h(38);
		.mg(40,0,0,110);
		border-radius:5%;
		background: cornflowerblue;
		color:#fff;
		.fs(14);
	}
}
</style>
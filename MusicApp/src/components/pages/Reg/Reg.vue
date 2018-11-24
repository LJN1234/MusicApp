<template>
	<div class="reg">
			<div class="contain">
		<div class="zc">
		<h3>注册</h3>
		</div>
		<div class="text">
			<input type="text" name=""  value="" placeholder="手机号/邮箱" class="num"/>
			<div class="yanzhengma">
				<input type="text" name=""  value="" placeholder="动态验证码"/>
				<div> 获取验证码</div>
			</div>
			<div class="pass">
			<input type="password" name="" value="" placeholder="密码"/>
			<input type="password" name="" value="" placeholder="确认密码"/>
			</div>
			<div class="forget">
			<input type="checkbox" name=""  value="" /><span>我已阅读并同意</span>
			<span class="zhanghu">已有账户</span>
		</div>
		<input type="button" name="" id="" value="登录"  class="dianji"/>
		</div>
		</div>
	</div>
</template>

<script>
	export default{
	name:'BottomBtn2',
	components:{},
//	props:'',
	data(){
		return {
			disc:"注册"
		}

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
<template>
	<div class="login">
		<div class="contain">
			<div class="dl">
				<i> 登录</i>
			</div>
		<div class="phone">
			<i class="fa fa-mobile" aria-hidden="true"></i>
			<input type="text" name=""  value="" placeholder="手机号/邮箱" class="num"/>
		</div>
		<div class="pass">
				<i class="fa fa-lock" aria-hidden="true"></i>
			<input type="password" name="" value="" placeholder="确认密码"/>
			</div>
		</div>
		<div class="forget">
			<span>忘记密码</span>
			<router-link to="/reg"> <span>用户注册</span></router-link> 
		</div>
		<input type="button" name="" id="" value="登录"  class="dianji"/>
	</div>
</template>

<script>
	export default{
	name:'BottomBtn2',
	components:{},
//	props:'',
	data(){
		return {
			disc:"登录"
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
	background-image:url('../../../../static/images/tiankong.jpg');
	.pd(0,0,200,0);
	.dl{
		.pd(100,0,0,0);
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
			border:1px solid #666;
				
		}
	}
	.pass{
		.w(330);
		.mg(0,0,0,20);
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
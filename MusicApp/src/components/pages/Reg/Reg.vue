<template>
<el-main>

  <el-form :model="ReginForm" ref="ReginForm" :rules="rule" class="regform" label-width="0">
		<h3 class="login-text">注册</h3>
		 <el-form-item prop="tel" class="phone">
		 	<i class="fa fa-mobile"></i>
		<el-input  type="text" v-model.number="ReginForm.tel" placeholder="手机号码"></el-input>
		</el-form-item>
		
		<el-form-item prop="password" class="pass">
			<!--<i class="fa fa-lock" aria-hidden="true"></i>-->
		<el-input  type="password" v-model="ReginForm.password" placeholder="密码"></el-input>
		</el-form-item>
		
		<el-form-item prop="againpassword">
			<!--<i class="fa fa-lock" aria-hidden="true"></i>-->
		<el-input  type="password" v-model="ReginForm.againpassword" placeholder="密码"></el-input>
		</el-form-item>
		
		<p>
		<input class="auth_input" type="text" v-model="verification"  placeholder="输入验证码" />
		<span v-show="sendAuthCode" class="auth_text auth_text_blue" @click="getAuthCode">获取验证码</span>
		<span v-show="!sendAuthCode" class="auth_text"> <span class="auth_text_blue">{{auth_time}} </span> 秒之后重新发送验证码</span> 
		</p>
		<div class="forget">
			<input type="checkbox" name=""  value="" /><span>我已阅读并同意</span>
			<span class="zhanghu" @click="goLogin">已有账户,前往登陆</span>
		</div>
	
	   <el-form-item >
			<el-button  type="success"  class="submitBtn"  round  @click.native.prevent="submit" :loading="logining">注册</el-button>
		

  		</el-form-item>

  </el-form>

 </el-main>
</template>

<script>
	export default{
	name:'Reg',
	components:{},
		 data () {
			let confirmpasswordCheck = (rule, value, callback) => {
				if (value === '') {
				 return callback(new Error('密码是必须的'))
				} else {
				 return callback()
				}
			}
			let againpassword = (rule, value, callback) => {
				if (value === '') {
				 return callback(new Error('请再次输入密码'))
				}else if(value !== this.ReginForm.password){
					return callback(new Error('两次输入密码不一致!'))
				}else {
				 return callback()
				}
			}
			let telCheck = (rule, value, callback) => {
				if (value === '') {
					
					 return callback(new Error('电话号码是必须的'))
				} else if (!Number.isInteger(value)) {
					
					return callback(new Error('电话号码必须是数字'))
				} else if (value.toString().length !== 11) {
					
					return callback(new Error('电话号码必须是11位数字'))
				 } else {
					callback()
				}
			}
		return {
			ReginForm: {
				password: '',
				tel: '',
				againpassword:'',
			 },
			 logining: false,
			sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮'还是‘倒计时' */
			auth_time: 0, /*倒计时 计数器*/
			 verification:"",//绑定输入验证码框框
		rule: {
			 password: [
	
			     {
					required: true,
					message: '密码是必须的！',
					 trigger: 'blur'
			
			     }
		
	   		 ],
	   		  againpassword: [
	
			     {
					required: true,
					validator:againpassword,
					 trigger: 'blur'
			
			     }
		
	   		 ],
	
	
		    tel: [
		
			     {
			
			      required: true,
			      validator: telCheck,
			      trigger: 'blur'
			
			     }
		
		    ],

  		}

 	 }

 },
	methods:{
		 getAuthCode:function () {

      const verification =this.ReginForm.tel;

       const url = " "

       console.log("url",url);

        this.$http.get(url).then(function (response) {

         console.log("请求成功",response)

         }, function (error) {

         console.log("请求失败",error);

        })

      this.sendAuthCode = false;

     //设置倒计时秒

      this.auth_time = 10;

      var auth_timetimer = setInterval(()=>{

        this.auth_time--;

        if(this.auth_time<=0){

          this.sendAuthCode = true;

          clearInterval(auth_timetimer);

        }

      }, 1000);

    },

  // 封装注册发送请求方法

   thisAjax(){

   const passwordData=this.ReginForm.password;

   const phoneData =this.ReginForm.tel;

   const mCodeData=this.verification;

  //  手机注册

//emulateJSON:true设置后post可跨域

  const url = " 填接口"

      this.$http.post(url,{填传入的参数},{emulateJSON:true}).then(function (response) 

 {

     //登录后跳转的页面

        this.$router.push('/');

      }, function (error) {

        alert("请求失败",error);

      })

  },

  // ...

  submit () {

   this.$refs.ReginForm.validate(valid => {

    if (valid) {

     this.logining = true

      this. thisAjax();

     console.log('开始写入后台数据！')

    } else {

     console.log('submit err')

    }

   })

  },

  reset () {

   this.$refs.ReginForm.resetFields()

  },

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
	 created:function () {
            this.$emit('public_header', false);
            this.$emit('public_nav', false);
    }
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.regform{
	/*.pd(0,0,0,30);*/
	/*background-image:url('../../../../static/images/tiankong.jpg');*/
	.login-text{
		.mg(0,0,40,140);
		.fs(22);
	}
	.phone{
		position: relative;
		i{
			position:absolute;
			.l(5);
			.t(5);
			.fs(22);
		}
	}

	.auth_input{
		.w(180);
		.h(38);
		 border:1px solid #DCDFE6;
		  border-radius: 8%;
		 .pd(0,0,0,20);
	}
	.auth_text{
		.fs(14);
	}
	.submitBtn{
		.mg(60,0,30,120);
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
}
		
	
</style>
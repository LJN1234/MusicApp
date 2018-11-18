<template>
	 <div id="footer">
	 	<div class="play">
	        <PlayList :show='isShow' @close='Close'></PlayList>
	        <ul class="clearfix">
	            <li class="play_img fl">
	                <img src="/static/images/header.png">
	            </li>
	            <li class="play_info fl">
	                <p class="songName">一壶老酒</p>
	                <p class="singerName">孟刚</p>
	            </li>
	            <li class="play_btn fr">
	                <button  class="fa fa-step-backward"></button>
	                <button class="fa fa-play"></button>
	                <button class="fa fa-pause"></button>
	                <button class="fa fa-step-forward" @click="Show"></button>
	            </li>
	        </ul>
	    </div>
	 </div>
</template>

<script>
import PlayList from './PlayList'//引入组件
	
	export default{
	name:'Footer',
	components:{PlayList},
	data(){
		return {
			isShow:false
		}
	},
	methods:{
			Close(){
				 this.isShow=!this.isShow
			},
			Show(){
				 this.isShow=!this.isShow
			}
		}
}
</script>

<style lang="less" scoped>
@import url("../../styles/main.less");
	
#footer{
	position:fixed;
	.b(0);
	.l(0);
	.r(0);
	.w(375);
	.h(70);
	 background:#fff;
	.play{
		.w(375);
		.h(70);
		.lh(70);
		ul{
			.play_img{
				.w(70);
				.h(70);
				img{
					.w(70);
					.h(70);
					border-radius:50%;
					position:absolute;
					.t(0);
					.l(0);
				}
			}
			.play_info{
				.w(160);
				.h(60);
				.mg(10,0,10,20);
				p{
					.w(160);
					.h(30);
					.lh(25);
					.fs(18);
				}
			}
			.play_btn{
				.w(120);
				.h(40);
				.fs(25);
				 background:#fff;
				/*color:red;*/
			}
		}
	} 
}	
</style>
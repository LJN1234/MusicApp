<template>



	<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
	    <div id="playlist" v-show='show'>
		    <div class="musicList_box">
		        <h3>播放列表（0首）</h3>
			    <ul class="musicList">
			        <li>
			            <span></span>
			            <b> 您还没有添加歌曲</b>
			            <button  class="fa fa-times"></button>
			        </li>
			    </ul>
		    </div>
	    </div>
    </transition>
    
</template>
<script>
    
    export default{
        name:'PlayList',
		components:{},
		props:['show'],
		data(){
			return {
				
			}
	
		},
		methods:{
			Close(){
				this.isShow=false
			}
		}
    }
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");

	#playlist{
		.w(375);
		.h(200);
		background:red;
		z-index:1000;
		position:fixed;
		.l(0);
		.r(0);
		.b(70);
		.musicList_box{
			h3{
				.fs(16);
				.h(40);
				.lh(40);
				background:green;
				border-bottom:1px solid #ccc;
			}
			.musicList{
				
				li{
					.fs(16);
					.h(30);
					.lh(30);
					background:blue;
				}
			}
		}
	}
</style>
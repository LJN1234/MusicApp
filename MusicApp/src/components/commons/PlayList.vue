<template>
	<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
	    <div id="playlist" v-show='show'>
		    <div class="musicList_box">
		        <div class="title">
					<h3>播放列表（{{songArray.length}}首）</h3>
					<p>
						<i class="fa fa-random" aria-hidden="true"></i>
						<i class="fa fa-random" aria-hidden="true"></i>
						<i class="fa fa-random" aria-hidden="true"></i>
						<i class="fa fa-random" aria-hidden="true"></i>
					</p>
				</div>
			    <ul class="musicList">
			        <li v-for="(item,index) in songArray" :key="index">
			            <div v-if="songArray.length>0" class="listCon">
							<i>{{index+1}}</i>
							<p @click="toPlay(item.songId,item.songName,item.songArt,item.songImg)">
								<span>{{item.songName}}</span>
								--
								<span>{{item.songArt}}</span>
							</p>
							<i class="fa fa-times" @click="remove(item.songId)"></i>
						</div>
			            <div v-else>
							<b> 您还没有添加歌曲</b>
						</div>
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
		data(){
			return {
				nowSong:{
					songId:'',
					songName:'',
					songArt:'',
					songImg:''
				}
			}
		},
		props:{
			show:{
				type:Boolean
			},
			songArray:{
				type:Array
			}
		},
		methods:{
			Close(){
				this.isShow=false
			},
			toPlay(id,name,art,img){
				this.nowSong.songId=id
				this.nowSong.songImg=img
				this.nowSong.songName=name
				this.nowSong.songArt=art
				this.$store.commit('changeNowSong', this.nowSong)
				this.$store.commit('changeNowPlay', false)
			},
			remove(songId){
				var res = confirm("您确定要删除吗？")
				if(res){
					var arr = JSON.parse(localStorage.getItem('songInfo'));
					console.log('qian',arr)
					for(var i=0;i<arr.length;i++){
						if(arr[i].songId == songId){
							console.log(111)
							arr.splice(i,1); //删除下标为i的元素
							console.log(arr)
							window.localStorage.setItem('songInfo',JSON.stringify(arr))
							this.$store.commit('changePlayList', arr)
						}
					}
				}
			}
		},
		created(){
			this.Close()
		}
    }
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");

	#playlist{
		.w(375);
		.h(300);
		background:#999;
		// color:#fff;
		z-index:1000;
		overflow:auto;
		position:fixed;
		.l(0);
		.r(0);
		.b(70);
		.musicList_box{
			.title{
				.w(375);
				.h(40);
				.lh(40);
				display: flex;
				justify-content: space-around;
				border-bottom:1px solid #ccc;
				h3{
					.w(190);
					.fs(16);
					.h(40);
					.lh(40);	
				}
				p{
					.w(160);
					.h(40);
					display: flex;
					justify-content: space-between;
					i{
						display: inline-block;
						.w(40);
						.h(40);
						.lh(40);
						text-align: center;
						flex:1;
						.fs(20);
					}
				}
			}
			.musicList{
				.mg(10,0,0,0);
				li{
					.fs(14);
					.h(30);
					.lh(30);
					.listCon{
						.w(375);
						.h(30);
						display: flex;
						justify-content: space-around;
						p{
							.w(280);
							.h(30);
						}
						i{
							display: inline-block;
							.w(30);
							.h(30);
							.lh(30);
							text-align: center;
						}
					}
				}
			}
		}
	}
</style>
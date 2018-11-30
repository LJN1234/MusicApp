<template>
	<div id="artSong">
		<div class="con-list">
			<div class="playAll">
				<i class="fa fa-play-circle-o"></i>
				<span>播放全部</span>
			</div>
			<ul>
				<li v-for="(item,index) in tracks" :key="item.id" v-if="index<limit">
					<div class="num fl">
						<span>{{index+1}}</span>
					</div>
					<div class="Info fl">
						<p class="name">{{item.name}}</p>
						<p class="singer">{{item.ar[0].name}}</p>
					</div>
					<div class="btns">
						<i class="fa fa-plus" @click="addMusic(item.id,item.name,item.artists[0].name,item.album.blurPicUrl)"></i>
						<i class="fa fa-play" @click="playMusic(item.id,item.name,item.artists[0].name,item.album.blurPicUrl)"></i>
					</div>
				</li>
			</ul>
		</div>
		<Footer v-show="Appear"></Footer>
		<audio id="audio" autoplay></audio>
	</div>
</template>

<script>
import Footer from './Footer';

	
	export default {
		name: 'MusicList',
		components:{Footer},
		props: {
			tracks: {
				type: Array
			}
		},
		data() {
			return {
				limit:20,
				Appear:false,
				arr:[]
			}
		},
		methods:{
			next(){
				this.limit+=20
			},
			repeat(arr){
				var unique = {};
				arr.forEach(el => {
					unique[JSON.stringify(el)]=1
				});
				arr=object.key(unique).map()
			},
			addMusic(id,name,art,img){
				var songInfo = new Object;
				songInfo.songId = id
				songInfo.songName = name
				songInfo.songArt = art
				songInfo.songImg = img
				this.arr.push(songInfo)
				window.localStorage.setItem('songInfo',JSON.stringify(this.arr))
			},
			playMusic (id,name,art,img) {
				var songInfo = new Object;
				const audio = document.querySelector('#audio')
				songInfo.songId = id
				songInfo.songName = name
				songInfo.songArt = art
				songInfo.songImg = img
				// var nowSong={...songInfo}
				this.arr.unshift(songInfo)
				this.$store.commit('changeNowPlay', true)
				this.$axios.get(`/weapi/music/url?id=${songInfo.songId}`)
				.then((res) => {
					audio.src= res.data[0].url;
					if (this.$store.state.nowPlay) {
						audio.play()
					} else {
						audio.pause()
					}
					this.$store.commit('changeNowPlay', false)
					this.$store.commit('changePlayList', this.arr)
					this.$store.commit('changeNowSong', songInfo)
				})
				window.localStorage.setItem('nowSong',JSON.stringify(songInfo))
				window.localStorage.setItem('songInfo',JSON.stringify(this.arr))
			}
		},
	    created () {
	    	this.Appear = true
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	#artSong {
		.con-list {
			.title{
				display:flex;
				justify-content:space-between;
				h2 {
					.fs(20);
					font-weight: 700;
					text-align: left;
					.mg(14, 0, 18, 0);
				}
				span{
					.fs(14);
					.mg(14, 0, 18, 0);
				}
			}
			.playAll{
				.w(355);
				.h(60);
				.mg(0,10,0,10);
				border-bottom: 1px dashed #c0c0c0;
				i{
					.fs(20);
				}
				span{
					.fs(12);
				}
			}
			ul {
				li {
					.w(355);
					.h(60);
					.mg(0,10,0,10);
					display:flex;
					justify-content:space-between;
					align-content:center;
					border-bottom: 1px dashed #c0c0c0;
					.num{
						flex:1;
						.w(40);
						.h(60);
						.lh(60);
						span{
							display:block;
							.fs(14);
						    text-align: center;
						    .w(40);
						    .h(60);
						    .lh(60);
						    color: #999;
						}
					}
					.Info {
						flex:7;
						.w(230);
						.h(60);
						display:flex;
						justify-content:center;
						flex-direction:column;
						.name,.singer {
							.fs(16);
							.h(20);
							.lh(20);
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
						.singer {
							.fs(12);
							color: #999;
						}
					}
					.btns{
						flex:2;
						display:flex;
						i{
							flex:1;
							display:block;
						    .w(40);
						    .h(65);
						    .lh(65);
						    .fs(14);
						    text-align: center;
						    color: #999;
						}
						
					}
				}
			}
		}
	}
</style>
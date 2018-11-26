<template>
	<div id="musicList">
		<div class="con-list">
			<div class="playAll">
				<i class="fa fa-play-circle-o"></i>
				<span>播放全部</span>
			</div>
			<ul>
				<li v-for="(item,index) in tracks" :key="index">
					<div class="num fl">
						<span>{{index+1}}</span>
					</div>
					<div class="Info fl">
						<p class="name">{{item.name}}</p>
						<p class="singer">{{item.artists[0].name}}</p>
					</div>
					<div class="btns">
						<i class="fa fa-plus" @click="addToList(id)"></i>
						<i class="fa fa-play" @click="playMusic(item.id, index)"></i>
					</div>
				</li>
			</ul>
			<button>更多</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MusicList',
		props: {
			tracks: {
				type: Array
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			addToList(id){

			},
			// id是音乐id，ind是即将播放的音乐在页面音乐列表的序列号，ifadd表示是否要添加这个即将播放的音乐到列表，len表示音乐仓库的长度
			playMusic (id, ind, ifAdd, len) {
				console.log(ind)
				this.$axios.get(`/weapi/music/url?id=${id}`)
				.then((res) => {
					console.log(ind)
					// 这个ind是页面音乐列表的序列
					if (this.songs[ind].album) {
						var artists = this.songs[ind].artists
						var imgUrl = this.songs[ind].album.blurPicUrl
					} else {
						imgUrl = this.songs[ind].al.picUrl
						artists = this.songs[ind].ar
					}
					console.log(this.$store.state.musicUrlList.length)
					let nowInd = null
					if (len || len === 0) {
						nowInd = len
					} else {
						nowInd = this.$store.state.musicUrlList.length
					}
					console.log(len)
					console.log(nowInd)
					// 下面这个ind是当前播放音乐在音乐仓库的序列
					const obj1 = {
						id: this.songs[ind].id,
						ind: nowInd,
						nowMusicUrl: res.data.data[0].url,
						nowName: this.songs[ind].name,
						nowArtists: artists,
						nowImgurl: imgUrl
					}
					const obj2 = {
						imgUrl: imgUrl,
						id: id,
						url: res.data.data[0].url,
						name: this.songs[ind].name,
						artists: artists
					}
					this.$store.dispatch('changeMusic', obj1)
					this.$store.dispatch('changePlayStatus', true)
					this.$store.dispatch('changeControllerStatus', true)
					if (ifAdd) {
						return
					}
					this.$store.dispatch('pushMusic', obj2)
				})
			}
		},
	    mounted () {
	     
	    }
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	#musicList {
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
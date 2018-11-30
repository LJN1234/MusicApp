<template>
	 <div id="footer">
		<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
	 	<div class="play">
	        <ul class="play-con clearfix">
	            <li class="play_img fl">
	                <img :src="query.songImg">
	            </li>
	            <li class="play_info fl">
	                <p class="songName" :id="query.songId">{{query.songName}}</p>
	                <p class="singerName">{{query.songArt}}</p>
	            </li>
	            <li class="play_btn fr">
	                <button  class="fa fa-step-backward"></button>
					<button :class="playIcon" @click="isPlay()" ></button>
	                <button class="fa fa-step-forward"></button>
	                <button class="fa fa-list" @click="Show"></button>
	            </li>
	        </ul>
			 <PlayList :show='isShow' :songArray="songArray" @close='Close'></PlayList>
	    </div>
		</transition>
		<audio id="audio" autoplay></audio>
	 </div>
</template>

<script>
import PlayList from './PlayList'//引入组件
	
	export default{
	name:'Footer',
	components:{PlayList},
	// props:{
	// 	songInfo:{
	// 			type:Object
	// 		}
	// },
	data(){
		return {
			isShow:false,
			songArray:[],
			nowSong:{}
		}
	},
	watch: {
      query () {
        this.nowSong = {}
		this.updataSong()
		// this.isPlay()
	  },
	  replay(){
		  
	  }
    },
	mounted(){
		this.updataSong()
	},
	computed:{
		playIcon(){
			return this.$store.state.nowPlay? 'fa fa-play':'fa fa-pause'
		},
		query () {
        return this.$store.state.nowSong
      }
	},
	methods:{
		updataSong(){
			this.nowSong = this.$store.state.nowSong
		},
		isPlay(){
			this.$store.commit('changeNowPlay', !this.$store.state.nowPlay)
			const audio = document.querySelector('#audio')
				if (!this.$store.state.nowPlay) {
					const songId = document.querySelector('.songName')
					this.$axios.get(`/weapi/music/url?id=${songId.id}`)
					.then((res) => {
						audio.src= res.data[0].url;
						audio.play()
					})
				} else {
					audio.pause()
					this.$store.commit('changeNowPlay', true)
				}
				
		},
		pause(){
			this.$store.commit('changeNowPlay', false)
		},
		Close(){
				this.isShow=!this.isShow
		},
		Show(){
				this.isShow=!this.isShow
				this.songArray = JSON.parse(window.localStorage.getItem('songInfo'))
				// console.log(this.songArray)
		}
		
	},


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
					.fs(14);
					color:#000;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.singerName{
					.fs(12);
					color:#333;
				}
			}
			.play_btn{
				.w(120);
				.h(40);
				.fs(20);
				button{
					background:#fff;
					color:#999;
					.mg(0,5,0,5);
				}
			}
		}
	} 
}	
</style>
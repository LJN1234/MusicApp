<template>
	<div id="musicList">
		<div class="con-list">
			<div class="playAll">
				<i class="fa fa-play-circle-o"></i>
				<span>播放全部</span>
			</div>
			<ul>
				<li v-for="(item,index) in tracks" :key="index">
					<div class="add fl">
						<span>{{index+1}}</span>
					</div>
					<div class="Info fl">
						<p class="name">{{item.name}}</p>
						<p class="singer">{{item.artists[0].name}}</p>
					</div>
					<div class="btns">
						<i class="fa fa-plus"></i>
						<i class="fa fa-play"></i>
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
					.add{
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
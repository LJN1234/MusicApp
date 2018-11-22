<template>
	<div class="main">
		<div class="con-list">
			<div class="title">
				<h2>热歌推荐</h2>
				<span>更多</span>
			</div>
			<ul>
				<li v-for="(item,index) in singList" :key="index">
					<div class="add fl">
						<i class="fa fa-plus-square-o"></i>
					</div>
					<div class="Info fl">
						<p class="name">{{item.name}}</p>
						<p class="singer">{{item.song.artists[0].name}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HotSong',
		data() {
			return {
				singList: [],
			}
		},
		methods:{
			getList(){
//				https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?
				this.$axios.post('/hot/api/personalized/newsong')
				.then((res)=>{
					console.log(res.result)
					this.singList=res.result
					console.log(res.result[0].song.artists[0].name)

				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		created() {
			this.getList()
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.main {
		box-sizing:border-box;
		.pd(0, 10, 80, 10);
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
			ul {
				li {
					.w(375);
					.h(65);
					border-bottom: 1px dashed #c0c0c0;
					.add{
						position:relative;
						.t(15);
						.l(5);
						.w(25);
						.h(25);
						.fa{
							position:absolute;
							.t(0);
							.l(0);
							.fs(22);
						}
					}
					.Info {
						.w(330);
						.h(55);
						.pd(5,0,5,15);
						.name,.singer {
							.fs(16);
							.h(25);
							.lh(25);
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
						.singer {
							.fs(12);
							color: #999;
						}
					}
				}
			}
		}
	}
</style>
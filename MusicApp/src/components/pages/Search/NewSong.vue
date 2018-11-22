<template>
	<div class="main">
		<div class="con-list">
			<div class="title">
				<h2>热歌推荐</h2>
				<span>更多</span>
			</div>
			<ul>
				<li v-for="(item,index) in singList" :key="index" v-if="index<limit">
					<div class="add fl">
						<i class="fa fa-plus-square-o"></i>
					</div>
					<div class="Info fl">
						<p class="name">{{item.data.songname}}</p>
						<p class="singer">{{item.data.singer[0].name}}</p>
					</div>
				</li>
			</ul>
			<button @click="more">更多</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home_main',
		data() {
			return {
				singList: [],
				limit:10
			}
		},
		methods:{
			more(){
				this.limit+=10;
				console.log(this.limit)
			},
			getList(){
//				https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?
				this.$axios.get('/test/v8/fcg-bin/fcg_v8_toplist_cp.fcg',{params:{
					g_tk:5381,
					uin:0,
					format:"json",
					inCharset:"utf-8",
					outCharset:"utf-8",
					notice:0,
					platform:"h5",
					needNewCode:1,
					tpl:3,
					page:"detail",
					type:"top",
					topid:26,
					_:1542421348750
           	}})
				.then((res)=>{
//					console.log(res)
					this.singList=res.songlist
//					console.log(this.singList)
//					console.log(this.singList.length)

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
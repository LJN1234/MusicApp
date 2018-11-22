<template>
	<div class="main">
		<div class="con-list">
			<div class="title">
				<h2>热门歌单</h2>
			</div>
			<ul>
				<li v-for="(item,index) in singList" :key="index">
					<div class="con">
						<div class="Img">
							<img :src="item.picUrl" />
						</div>
						<div class="Info">
							<p>{{item.name}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home_main',
		data() {
			return {
				singList: []
			}
		},
		methods:{
			getList(){
//				https://m.juooo.com/index/hotsShowList
				this.$axios.post('/hot/api/personalized/playlist')
				.then((res)=>{
					this.singList=res.result
					console.log(this.singList)
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
		.w(375);
		.pd(5, 10, 5, 10);
		box-sizing:border-box;
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
			}
			ul {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li {
					flex: 1;
					width: 30%;
					.Img {
						.w(107);
						.h(107);
						position: relative;
						img {
							position: absolute;
							.t(0);
							.l(0);
							width: 100%;
							height: 100%;
						}
					}
					.Info {
						.w(107);
						.h(50);
						p{
							.fs(14);
							.lh(20);
							overflow : hidden;
						    text-overflow: ellipsis;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    -webkit-box-orient: vertical;
							.mg(5,0,0,5)
						}
					}
				}
			}
		}
	}
</style>
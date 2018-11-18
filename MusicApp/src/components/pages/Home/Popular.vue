<template>
	<div class="main">
		<div class="con-list">
			<div class="title">
				<h2>热门演唱会</h2>
				<span>更多</span>
			</div>
			<ul>
				<li v-for="(item,index) in singList" :key="index">
					<div class="con">
						<div class="Img">
							<img :src="item.pic" />
						</div>
						<div class="Info">
							<p class="name">{{item.show_name}}</p>
							<p class="singer">{{item.venue_name}}</p>
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
				this.$axios.post('/hot/index/hotsShowList')
				.then((res)=>{
					this.singList=res.data
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
				span{
					.fs(14);
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
						.name {
							.fs(14);
							.lh(14);
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
							.mg-t(5)
						}
						.singer {
							.fs(12);
							color: #999;
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="main">
		<div class="con-list">
			<div class="title">
				<h2>MV推荐</h2>
				<span>更多</span>
			</div>
			<ul>
				<li v-for="(item,index) in mv" :key="index">
					<div class="img">
						<img :src="item.cover"/>
					</div>
					<div class="Info">
						<h2>{{item.name}}</h2>
						<span>{{item.artistName}}</span>
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
				mv: [],
			}
		},
		methods:{
			getList(){
				this.$axios.get('/custom/mv/first?limit=12&offset=12')
				.then((res)=>{
					console.log(res.data)
					this.mv=res.data
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
		position:relative;
		.con-list {
			h2 {
				float:left;
				.fs(20);
				font-weight: 700;
				text-align: left;
			}
			span{
				float:right;
				.fs(14);	
			}
			.title,.Info{
				.w(355);
				.h(50);
				.lh(50);
				.mg(14, 0, 18, 0);
				display:flex;
				justify-content:space-between;
			}
			.Info{
				h2{
					.fs(16);
					font-weight: 400;
				}
				span{
					.fs(12);
					color:#ccc;
				}	
			}
			ul {
				position:absolute;
				.l(0);
				.t(60);
				li {
					.w(375);
					.h(250);
					border-bottom: 1px dashed #c0c0c0;
					.img{
						.w(375);
						.h(200);
						img{
							.w(375);
							.h(200);
						}
					}
				}
			}
		}
	}
</style>
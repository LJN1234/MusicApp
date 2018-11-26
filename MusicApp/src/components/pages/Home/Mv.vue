<template>
	<div class="mv">
		<div class="con-list">
			<div class="title">
				<h2>MV推荐</h2>
				<!--<span>更多</span>-->
			</div>
			<ul>
				<li v-for="(item,index) in mvList" :key="index">
					<div class="img">
						<img :src="item.cover"/>
					</div>
					<div class="Info">
						<h2>{{item.name}}</h2>
						<span>{{item.artistName}}</span>
					</div>
				</li>
			</ul>
			<!--<button @click="getList(limit)">点击加载更多资源</button>-->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Mv',
		data() {
			return {
				mvList: [],
			}
		},
		methods:{
			getList(limit){
				const offset = this.mvList.length
				this.limit+=5	
				this.$axios.get(`/weapi/mv/first?limit=${limit}&offset=${offset}`)
				.then((res)=>{
					console.log(res)
//					this.mv=res.data
					for (let mv of res.data) {
			            this.mvList.push(mv)
			          }
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		created() {
			this.getList(5)
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.mv {
		width:100%;
		.con-list {
			.title{
				.w(355);
				.h(50);
				.lh(50);
				display:flex;
				justify-content:space-between;
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
			}
			ul {
				li {
					.w(375);
					.h(250);
					.img{
						.w(375);
						.h(200);
						img{
							.w(375);
							.h(200);
						}
					}
					.Info{
						.w(365);
						.h(50);
						.mg(5, 5, 0, 5);
						display: flex;
						justify-content: space-between;
						h2{
							.w(230);
							.h(50);
							.fs(16);
							font-weight: 400;
							float:left;
							text-align: left;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						span{
							.w(120);
							.fs(14);
							text-align: right;
							float:right;
							color:#999;
							overflow: hidden;
							text-overflow: ellipsis;
						}	
					}
				}
			}
		}
	}
</style>
<template>
	<div class="sole">
		<div class="con-list">
			<div class="title">
				<h2>独家放送</h2>
			</div>
			<ul>
				<li v-for="(item,index) in lists" :key="index">
					<div class="img">
						<img :src="item.picUrl"/>
					</div>
					<div class="Info">
						<h2>{{item.name}}</h2>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Sole',
		data() {
			return {
				lists: [],
			}
		},
		methods:{
			getList(){
				this.$axios.get('/api/api/personalized/privatecontent')
				.then((res)=>{
					console.log(res)
					this.lists=res.result
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
	.sole {
		.w(375);
		.con-list {
			.title{
				.w(375);
				.h(50);
				.lh(50);
				.mg(14, 0, 18, 0);
				display:flex;
				justify-content:space-between;
				h2 {
					float:left;
					.fs(20);
					font-weight: 700;
					text-align: left;
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
						.mg(5, 5, 0, 5);
						h2{
							.fs(16);
							font-weight: 400;
							float:left;
							text-align: left;
						}	
					}
				}
			}
		}
	}
</style>
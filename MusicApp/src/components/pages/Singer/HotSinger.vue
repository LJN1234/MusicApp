<template>
	<div id="geshou">
		<div class="hot">
			<p>热门歌手</p>
		</div>
		<ul>
			<li v-for="(item,index) in singers" :key="index" @click="goToList(item.id)">
				<img :src="item.picUrl" />
				<p>{{item.name}}</p>
				<i class="fa fa-heart-o"></i>
			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		name: 'HotSinger',
		components: {},
		data() {
			return {
				singers: [],
			}
		},
		methods: {
			getList() {
				this.$axios.get(`/weapi/top/artists?offset=20&total=false&limit=20`)
				.then((res) => {
					this.singers = res.artists
					console.log(this.singers)
				})
				.catch((err) => {
					console.log(err)
				})
			},
			goToList(id){
				this.$router.push({path: `/singleList/${id}`})
			}
		},
		created() {
			this.getList()
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	#geshou {
		.hot {
			.h(45);
			.w(360);
			.lh(45);
			.pd(0, 0, 0, 15);
			p {
				.fs(20);
				text-align: left;
			}
		}
		ul {
			.w(100%);
			li {
				.w(341);
				.h(76);
				border-bottom: 1px solid #f2f2f2;
				display: flex;
				.lh(76);
				.fs(16);
				position: relative;
				img {
					.w(68);
					.h(68);
					border-radius: 50%;
					.mg(0, 20, 0, 0);
				}
				i {
					position: absolute;
					.r(20);
					.t(30);
				}
			}
		}
	}
</style>
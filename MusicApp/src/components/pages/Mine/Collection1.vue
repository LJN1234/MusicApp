<template>
	<div class="coll">
		<p>{{disc}}</p>

		<ul>
			<li v-for="(item,index) in lists" :key="index" @click="select(item)" :class="list===item?'hl':''">{{item}}</li>
		</ul>
		<div class="look"> <p>请登录后查看收藏</p></div>

	</div>
</template>

<script>
	export default {
		name: 'BottomBtn2',
		components: {},
		data() {
			return {
				disc: "我的收藏1",
				lists: ['歌曲', '专辑', '歌单', '歌手'],
				list: '歌曲'

			}

		},
		methods: {
			select(item) {
				this.list = item
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.coll {
		
		p{
			.fs(22);
			.mg(10,0,0,10);
		}
		ul {
			display: flex;
			.h(56);
			justify-content: space-between;
			border-bottom: 1px solid #ccc;
			li {
				.w(85);
				.h(56);
				.fs(16);
				color: #999;
				.lh(56);
				text-align: center;
			}
			.hl {
				border-bottom: 1px solid #E13228;
				color: black;
			}
		}
		.look{
			.h(230);
			text-align: center;
			p{
				color:#999;
				.fs(14);
				.mg(80,0,20,0);
			}
		}
	}
</style>
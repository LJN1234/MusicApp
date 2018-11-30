<template>
	<div id="resultSheet">
		<div class="con-list" v-for="(item,index) in playlists" :key="index">
			<img :src="item.coverImgUrl"/>
			<div class="info">
				<h3>{{item.name}}</h3>
				<p>{{item.trackCount}}首by{{item.creator.nickname}},播放{{item.playCount}}次</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'ResultSheet',
		data() {
			return {
				playlists: []
			}
		},
	    // 计算当前搜索的值
	    computed: {
	      query () {
	        return this.$route.query.val
	      }
	    },
	    // query变化重新搜索
	    watch: {
	      query () {
	        this.playlists = []
	        this.getSheet()
	      }
	    },
	    methods: {
	      getSheet () {
	        const offset = this.playlists.length
	        this.$axios.get(`/weapi/search?keywords=${this.$route.query.val}&type=1000&limit=15&offset=${offset}`)
	          .then((res) => {
	          	console.log(res)
	            for (let list of res.result.playlists) {
	              this.playlists.push(list)
	            }
	          })
	      }
	    },
	    mounted () {
	      this.getSheet()
	    }
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	
	#resultSheet{
		// .mg(54,0,0,0);
		.con-list{
			.w(353);
			.h(100);
			.lh(100);
			.mg(10,10,0,10);
			border:1px solid #ccc;
			img{
				float:left;
				.w(100);
				.h(100);
			}
			.info{
				float:left;
				.w(230);
				.h(100);
				.mg(0,0,0,10);
				h3,p {
					.fs(16);
					.h(35);
					.lh(35);
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				h3{
					.mg(20,0,0,0);
				}
				p {
					.fs(14);
					color: #999;
				}
			}
		}
	}
</style>
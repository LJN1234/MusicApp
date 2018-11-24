<template>
	<div id="resultSingle">
		<div class="con-list">
			<ul>
				<li v-for="(item,index) in singList" :key="index">
					<div class="add fl">
						<i class="fa fa-plus-square-o"></i>
					</div>
					<div class="Info fl">
						<p class="name">{{item.name}}</p>
						<p class="singer">{{item.artists[0].name}}</p>
					</div>
				</li>
			</ul>
			<button>更多</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'resultSingle',
		data() {
			return {
				singList: []
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
	        this.singList = []
	        this.fetchData()
	      }
	    },
	    methods: {
	      getResult () {
	        const offset = this.singList.length
	        console.log(this.$route.query.val)
	        this.$axios.get(`/weapi/search?keywords=${this.$route.query.val}&type=1&limit=15&offset=${offset}`)
		      .then((res) => {
//		      	console.log(res.result.songs)
		        // this.songs = res.result.songs
		        for (let song of res.result.songs) {
		          this.singList.push(song)
		        }
		      })
	      }
	    },
	    mounted () {
	      this.getResult()
	    }
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	#resultSingle {
		.mg(200,0,0,0);
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
					.w(355);
					.h(65);
					.mg(0,10,0,10);
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
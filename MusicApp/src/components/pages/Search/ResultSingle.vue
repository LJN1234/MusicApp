<template>
	<div id="resultSingle">
		<MusicList :tracks="singList"></MusicList>
	</div>
</template>

<script>
import MusicList from '../../commons/MusicList'
	export default {
		name: 'resultSingle',
		components:{MusicList},
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
	      }
	    },
	    methods: {
	      getResult () {
	        const offset = this.singList.length
	        console.log(this.$route.query.val)
	        this.$axios.get(`/weapi/search?keywords=${this.$route.query.val}&type=1&limit=15&offset=${offset}`)
		      .then((res) => {
		      	console.log(res.result.songs)
		        this.songs = res.result.songs
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
		// .mg(200,0,0,0);
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
					.h(60);
					.mg(0,10,0,10);
					display:flex;
					justify-content:space-between;
					align-content:center;
					border-bottom: 1px dashed #c0c0c0;
					.add{
						flex:1;
						.w(40);
						.h(60);
						.lh(60);
						span{
							display:block;
							.fs(14);
						    text-align: center;
						    .w(40);
						    .h(60);
						    .lh(60);
						    color: #999;
						}
					}
					.Info {
						flex:7;
						.w(230);
						.h(60);
						display:flex;
						justify-content:center;
						flex-direction:column;
						.name,.singer {
							.fs(16);
							.h(30);
							.lh(30);
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
						.singer {
							.fs(12);
							color: #999;
						}
					}
					.btns{
						flex:2;
						display:flex;
						i{
							flex:1;
							display:block;
						    .w(40);
						    .h(65);
						    .lh(65);
						    .fs(14);
						    text-align: center;
						    color: #999;
						}
						
					}
				}
			}
		}
	}
</style>
<template>
	<div id="resultSinger">
		<div class="con-list" v-for="(item,index) in singer.artists" :key="index">
			<img :src="item.img1v1Url"/>
			<p>{{item.name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ResultSinger',
		data() {
			return {
				singer: ''
			}
		},
	    mounted () {
	       this.$axios.get(`/weapi/search?keywords=${this.$route.query.val}&type=100`)
	        .then((res) => {
//		      	console.log(res.result)
		        this.singer = res.result
		    })
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
	            this.$axios.get(`/weapi/search?keywords=${this.$route.query.val}&type=100`)
		        .then((res) => {
//		            console.log(res.result)
				    this.singer = res.result
		        })
	      	}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	
	#resultSinger{
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
			p{
				float:left;
				.w(230);
				.h(100);
				.fs(18);
				.mg(0,0,0,20)
			}
		}
	}
</style>
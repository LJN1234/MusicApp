<template>
  <div id="resultMv">
    <div v-for="item in mvs" class="mvList">
      <div class="mvImg">
        <img :src="item.cover">
        <p class="mvTime">{{Math.floor(item.duration*0.001/60).toString().padStart(2, '0')}}:{{(item.duration*0.001%60).toString().padStart(2, '0')}}</p>
      </div>
      <div class="mvMsg">
      	<h3>{{item.name}}</h3>
        <h4>{{item.artistName}}</h4>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
  	name:"ResultMv",
    data () {
      return {
        mvs: []
      }
    },
    mounted () {
      this.getMv()
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
        this.mvs = []
        this.getMv()
      }
    },
    methods: {
      getMv () {
        const offset = this.mvs.length
        this.$axios.get(`/weapi/search?keywords=${this.$route.query.val}&type=1004&limit=15&offset=${offset}`)
	        .then((res) => {
	        	console.log(res.result)
	        	for (let mv of res.result.mvs) {
	          		this.mvs.push(mv)
	        	}
	      })
	    }
    }
  }
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	
#resultMv{
  	.mg(200,0,0,0);
    .mvList {
    	.w(355);
    	.h(250);
    	.mg(0,10,10,10);
	    margin-bottom: 0.1rem;
	    .mvImg {
	    	.w(355);
    		.h(200);
        position: relative;
        img {
            width: 100%;
        }
        .mvTime {
	        position: absolute;
	        .b(1);
	        .l(3);
	        color: #fff;
	        .fs(12);
        }
	    }
        .mvMsg {
        	.w(355);
    			.h(50);
		    h3 {
		      .fs(16);
		    }
		    h4 {
		    	.fs(14);
		    }
	    }
    }
}
</style>

<template>
  <div id="mvList">
    <listTitle :title="title"></listTitle>
    <div v-for="(item,index) in mvLists" class="mvList-con" :key="index">
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
import listTitle from './listTitle'

  export default {
    name:"MvList",
    components:{listTitle},
    data () {
      return {
        mvLists: [],
        title:{
          title:'Mv推荐',
          num:-1,
          bg:'rgb(13, 148, 125)'
        }
      }
    },
    mounted () {
      this.getMv()
    },
    methods: {
      getMv () {
        // const offset = this.mvs.length
        this.$axios.get(`/weapi/mv/first?limit=100&offset=100`)
        .then((res)=>{
            this.mvLists=res.data
        })
	    }
    },
    created:function () {
      this.$emit('public_header', false);
      this.$emit('public_nav', false);
    }
  }
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	
#mvList{
    .mvList-con {
    	.w(375);
    	.h(250);
    	.mg(0,0,10,0);
	    margin-bottom: 0.1rem;
	    .mvImg {
	    	.w(375);
    		.h(200);
        position: relative;
        img {
          width: 100%;
          height:100%;
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
          .pd(5,0,0,10);
		    h3 {
          .fs(16);
          .lh(20);
		    }
		    h4 {
          .fs(12);
          .lh(20);
          color: #999;
		    }
	    }
    }
}
</style>

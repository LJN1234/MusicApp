<template>
  <div id="searchResult">
    <div class="con-top">
    	<div class="inputs">
	      <input id="inp" class="text" v-model="val"  @keyup.enter="submit()"  autofocus="autofocus"  placeholder="搜索音乐·歌手·歌单·MV">
	      <input type="button" class="sousuo" value="GO" @click="submit()" />
	    </div>
	    <div class="result-type">
	      <router-link :to="{path: '/searchResult/resultSingle', query: { val: val }}" replace>单曲</router-link>
	      <router-link :to="{path: '/searchResult/resultSinger', query: { val: val }}" replace>歌手</router-link>
	      <router-link :to="{path: '/searchResult/resultSheet', query: { val: val }}" replace>歌单</router-link>
	      <router-link :to="{path: '/searchResult/resultMv', query: { val: val }}" replace>MV</router-link>
	    </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ResultSingle from './ResultSingle'

  export default {
  	name:'SearchResult',
  	components:{ResultSingle},
    data () {
      return {
        val: ''
      }
    },
    methods: {
      submit () {
//      console.log('submit')
        this.$router.replace({path: '/searchResult/resultSingle', query: { val: this.val }})
      }
    },
    mounted () {
      this.val = this.$route.query.val
      this.$router.push({path: '/searchResult/resultSingle', query: { val: this.$route.query.val }})
    }
  }
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';

#searchResult{
	.con-top{
		.w(375);
	  .h(100);
	  position:fixed;
		.t(100);
		.l(0);
		background:#f8f8f8;
	  z-index:9999;
		.inputs {
	    .w(365);
	    .h(50);
	    .lh(50);
	    margin:0 auto;
	    .text {
	    	.w(300);
		    .h(40);
		    .lh(40);
		    .fs(14);
	      border-bottom: 1px solid #ccc;
	    }
	    .sousuo {
	    	.w(50);
	    	.h(40);
		    .fs(20);
		    align-self: center;
		    cursor: pointer;
		    background: #EEEEEE;
		  }
		}
		.result-type {
			position:fixed;
			.t(160);
			.l(0);
	    display: flex;
	    .w(375);
	    .h(30);
	    a {
	    	display:inline-block;
	      color: #666;
	      .fs(14);
	      width:25%;
	      .lh(30);
	      text-align: center;
	    }
	    .router-link-active {
	      color: #df2d2d;
	      text-decoration: none;
	      border-bottom: 2px solid #df2d2d;
	    }
	    div {
		    flex: 1;
		    text-align: center;
		  }
	  }
	}
}
</style>

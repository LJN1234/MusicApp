<template>
  <div id="searchResult">
		<listTitle :title="title"></listTitle>
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
import listTitle from '../../commons/listTitle'
  export default {
		name:'SearchResult',
		components:{listTitle},
    data () {
      return {
				val: '',
				title:{
					title:'Mv推荐',
					num:-2,
					bg:'rgb(13, 148, 125)'
				},
      }
    },
    methods: {
      submit () {
				console.log(submit)
        this.$router.replace({path: '/searchResult/resultSingle', query: { val: this.val }})
      }
    },
    mounted () {
      this.val = this.$route.query.val
      this.$router.push({path: '/searchResult/resultSingle', query: { val: this.$route.query.val }})
		},
		 created:function () {
			this.$emit('public_header', false);
			this.$emit('public_nav', false);
		},
		destroyed(){
			this.$emit('public_header', true);
			this.$emit('public_nav', true);
		}
  }
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';

#searchResult{
	.con-top{
		.w(375);
	  .h(100); 
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
			.mg(10,0,0,0);
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

<template>
  <div id="search">
    <div class="inputs">
      <input id="inp" class="text" v-model="query"  @keyup.enter="submit()"  autofocus="autofocus"  placeholder="搜索音乐·歌手·歌单·MV">
      <input type="button" class="sousuo" value="GO" @click="submit()" />
    </div>
    <div class="hot-search">
      <h3>热门搜索</h3>
      <button v-for="(item,index) in hotSearch" :key="index" @click="submit(item)">{{item}}</button>
    </div>
  </div>
</template>

<script>
  export default {
		name:'Search',
		components:{},
		
    data () {
      return {
        query: '',
        hotSearch: ['冯提莫', '陈奕迅', '姐姐', 'samsara', '童话镇', '阿婆说', 'Taylor Swift', '周杰伦', '成都', '薛之谦', 'Coldplay']
      }
    },
    methods: {
      submit(str) {
        if (str) {
          this.query = str
        }
     		// console.log(this.query)
        this.$router.push({path: '/searchResult', query: { val: this.query }})
        this.query = ''
      }
		},
		
  }
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';

	#search{
		.mg(100,0,80,0);
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
			    font-size: 20px;
			    align-self: center;
			    cursor: pointer;
			    background: #EEEEEE;
			  }
		}
		  
		.hot-search {
		    padding: 10px;
		    h3 {
			    font-size: 16px;
			}
		    button {
			    background-color: white;
			    border: 1px solid #666;
			    padding: 5px 10px;
			    margin-right: 5px;
			    border-radius: 20px;
			    margin-bottom: 5px;
			    margin-top: 5px;
		    }
		}
	}
  
</style>

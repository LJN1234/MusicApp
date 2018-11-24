<template>
  <div id="leaderList">
    <section>
      <div v-for="(item, index) of keyValue1" class="listCon">
        <div class="list-img fl">
          <img :src="item.url">
          <span class="uptime">
            {{item.upTime}}
          </span>
        </div>
        <div class="list-song fl">
          <mu-circular-progress :size="30" color="red"/>
          <div v-for="(it, inde) of keyValue1[index].music">
            <p>
              {{inde + 1}}. {{it.name}}-
              <span v-for="(i, ind) of it.artists">{{i.name}}<span v-if="ind !== (it.artists.length - 1)">/</span></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
  	name:"LeaderList",
    data () {
      return {
        topMusic: [],
        keyValue1: [
          {
            'key': 0,
            'val': '新歌榜',
            'url': 'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=150y150',
            'music': [],
            'upTime': '每天更新',
            'loding': true
          },
          {
            'key': 1,
            'val': '热歌榜',
            'url': 'http://p3.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150',
            'music': [],
            'upTime': '每周四更新',
            'loding': true
          },
          {
            'key': 2,
            'val': '原创榜',
            'url': 'http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150',
            'music': [],
            'upTime': '每周四更新',
            'loding': true
          },
          {
            'key': 3,
            'val': '飙升榜',
            'url': 'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150',
            'music': [],
            'upTime': '每天更新',
            'loding': true
          }
        ]
      }
    },
    mounted () {
      this.ajax(0)
      this.ajax(1)
      this.ajax(2)
      this.ajax(3)
    },
    methods: {
      ajax (ind) {
        this.$axios.get(`/weapi/top/list?idx=${ind}`)
	    .then((res) => {
	    	console.log(res)
          let [{name: name1, artists: ar1}, {name: name2, artists: ar2}, {name: name3, artists: ar3}] = res.result.tracks
          this.keyValue1[ind].music = [{name: name1, artists: ar1}, {name: name2, artists: ar2}, {name: name3, artists: ar3}]
          console.log(this.keyValue1[ind])
        })
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';	

#leaderList {
    background-color: #f1f6f4;
	.listCon {
		.w(375);
		.h(130);
	    .list-img {
	    	.w(120);
	        .h(120);
		    position: relative;
		    img {
		        .w(120);
		        .h(120);
		    }
		    .uptime {
		        position: absolute;
		        .r(11);
		        .t(7);
		        color: #fff;
		        .fs(14);
		    }
	    }
	    .list-song {
	    	.w(245);
		    .h(120);
	        .pd(30,0,0,10);
		    border-bottom: 1px solid #dce1df;
		    p{
		    	.fs(14);
		        color: #6d6d6d;
		        .lh(20);
		    }
	    }
	}
}
  
</style>

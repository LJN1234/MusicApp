<template>
	<div class="list">
		
		<div class="bangdan">
			<ul>
				<li v-for="(item,index) in topList" :key="index" > 
					
					<div>
					<img :src="item.picUrl"/>
					<div class="play-btn">
						<div class="fa fa-play-circle-o"></div>
					</div>
					</div>
					<div class="songs">
						<div class="numlist"><span class="numb">1 </span>
							<span class="songname">{{item.songList[0].songname}}</span> —<span class="songlist">{{item.songList[0].singername}}</span>
						</div>
						<div class="numlist"><span class="numb"> 2</span>
							<span class="songname">{{item.songList[1].songname}}</span> —<span class="songlist">{{item.songList[1].singername}}</span>
						</div>
						<div class="numlist"><span class="numb"> 3</span>
							<span class="songname">{{item.songList[2].songname}}</span> —<span class="songlist">{{item.songList[2].singername}}</span>
						</div>
						
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
	name:'LeaderList',
	components:{},
	data(){
		return {
//			disc:["榜单列表"],
//			topList:[]
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

	},///v8/fcg-bin/fcg_myqq_toplist.fcg?_=1542417081180
		methods:{
           getData(){
//         	console.log(this)
           	this.$axios.get('/test/v8/fcg-bin/fcg_myqq_toplist.fcg',{params:{
           		_:1542438506836
           	}})
           	.then((res)=>{
           		
           		var res1=JSON.parse(res.substring(18,res.length-1))
           		this.topList=res1.data.topList
           		console.log(this.topList)
           		
           	})
           	.catch((err)=>{
           		console.log(err)
           	})
           }
		},
	created(){
		this.getData()
//			console.log(222)
		},
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.list{
	/*background:skyblue;
	.mg(100,0,0,0);*/
	.bangdan{
		.mg(100,0,0,0);
		ul{
			li{
				.w(341);
				.h(140);
				border-bottom:1px solid #ccc;
				display:flex;
				position:relative;
				img{
					.w(110);
					.h(110);
					.mg(15,0,0,5);
				}
				.play-btn{
					position: absolute;
					 .t(75);
					.l(83);
					color:#ccc;
					
				}
				.songs{
					 .w(231);
					 .h(90);
					 .fs(14);
					 .mg(25,0,0,10);
					box-sizing:border-box;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis; 
					.numlist{
						 .h(28);
						.numb{
						 color: #fa6644;
   						 font-family: Arial;
  						 font-weight: 700;
    					font-style: italic;
					    }
					    .songlist{
					    	color:#343434;
					    	 .mg(0,0,0,10);
					    }
					}
					
				}
			}
		}
	}
}
</style>
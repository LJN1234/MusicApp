<template>
	<div class="Singer">
	<div class="navtype">
	<ul>
		<li v-for="(item,index) in listype" :key="index"  @click="selt(item)" :class="navlist===item?'hl':''" >{{item}}</li>
	</ul>
	</div>
	<div class="typeof">
			<ul>
				<li v-for="(item,index) in types" :key="index"  @click="ckeck(item)" :class="type===item?'hl':''" >{{item}}</li>
			</ul>
	</div>
	<div class="hot">
		<p>热门</p>
		
		<i  class="fa fa-bars" @click="Trogle"></i>
		</div>
		
	
	<NavSinger :show="isShow"></NavSinger>
	</div>
</template>

<script>
	import NavSinger from './NavSinger'//引入组件
	export default{
	name:'BottomBtn2',
	components:{NavSinger},
	data(){
		return {
			isShow:false,
			listype:['全部','华语','欧美','韩国','日本','其他'],
			navlist:'全部',
			types:['全部','男','女','组合'],
			type:'全部',
//			disc:"歌手榜单",
			
		}

	},
	methods:{
		Trogle(){
			this.isShow!=this.isShow
		},
		selt(item){
			this.navlist=item
		},
		ckeck(item){
			this.type=item
		}
		
	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.Singer{
	.navtype{
		.fs(16);
		.h(60);
		ul{
			display: flex;
			justify-content: space-between;
			border-bottom:1px solid #ccc;
			li{
				.w(60);
				.h(45);
				/*border:1px solid black;*/
				.lh(45);
				text-align:center;
			}
			.hl{
				color:red;
				text-decoration: underline;
			}
		}
	}
	.typeof{
		.h(60);
		.fs(16);
		border-bottom: 1px solid #ccc;
		ul{
			li{
				.w(60);
				.h(45);
				/*border:1px solid black;*/
				.lh(45);
				text-align:center;
				float: left;
			}
			.hl{
				color:red;
				text-decoration: underline;
			}
		}
	}
	.hot{
		.h(45);
		.w(300);
		.lh(45);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		.fs(16);
		p{
			text-align: left;
			
		}
		i{
			text-align: right;
			.mg(10,0,0,0);
		}
		
	}

	
}
</style>
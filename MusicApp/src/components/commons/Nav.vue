<template>
	<div id="nav">
		<ul>
			<li v-for="(item,index) in titles" :key="index" @click="chagePage(item.path)" :class="title===item.name?'hl':''">
				<router-link :to="{path:item.path}">{{item.title}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Nav',
		data(){
			return {
				titles:[{title:'首页',path:'/home',name:'Home'},
						{title:'歌手',path:'/singer',name:'Singer'},
						{title:'榜单',path:'/leaderList',name:'ListContent'},
						{title:'搜索',path:'/search',name:'Search'}]
			}
		},
		methods:{
			chagePage(path){
				var url=location.href; //取得整个地址栏
				var hash=url.split("#")[1]
				// console.log(hash)
				if(path===hash){
					this.$store.commit('chageShowAside',false)
				this.$router.push({ path: path})
				}	
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';	
 #nav{
 	position: fixed;
	.t(54);
    .l(0);
	.r(0);
	z-index:1000;
	background:#f3f3f3;
	box-sizing:border-box;
 	ul{
 		display: flex;
		justify-content: space-between;
		li{
			width:25%;
            .fs(17);
            .h(46);
            .lh(46);
            color:#333;
            text-align:center;
            a{
            	display:inline-block;
            	.h(44);
            	.lh(44);
			}
			.router-link-active {
				text-decoration: none;
				border-bottom: 2px solid #df2d2d;
			}
            
		}
 	}
 }
 
</style>
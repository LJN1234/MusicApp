<template>
	<div class="geshou ">
		<ul>
			<li v-for="(item,index) in singers"  :key="index">
					
				<img :src="item.img"/>
					
				<p>{{item.name}}</p>
				<i  class="fa fa-heart-o"></i>	
			</li>
		</ul>
	</div>

</template>

<script>
	export default{
	name:'HotSinger',
	components:{},
	data() {
			return {
				singers: [],
			}
		},
		methods:{
			getList(){
				this.$axios.get('/custom/top/artists')
				.then((res)=>{
					console.log(res)
//					this.singers=res
//					console.log(res)

				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		created() {
			this.getList()
		}
}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.geshou{
	/*.mg(200,0,0,0);*/
	 ul{
	 	 .w(100%);
				
		 li{
			.w(341);
			.h(76);
			border-bottom: 1px solid #f2f2f2;
			display:flex;
			 .lh(76);
			 .fs(16);
			 position:relative;
			 img{
			 	.w(68);
			 	.h(68);
			border-radius: 50%;
			.mg(0,20,0,0);
			}
			i{
				position: absolute;
				.r(20);
				.t(30);
			}
			
		}
	}
		
}
</style>
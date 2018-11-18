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
	name:'BottomBtn2',
	components:{},
	data(){
		return {
			
			singers:[{img:'/static/images/singer1.jpg',name:'薛之谦'},
			{img:'/static/images/singer2.jpg',name:'龙梅子'},
			{img:'/static/images/singer3.jpg',name:'展展与罗罗'},
			{img:'/static/images/singer4.jpg',name:'周华健'},
			{img:'/static/images/singer5.jpg',name:'小蓓蕾组合'},
			{img:'/static/images/singer6.jpg',name:'林俊杰'},
			{img:'/static/images/singer7.jpg',name:'刘珂矣'},
			{img:'/static/images/singer8.jpg',name:'任贤齐'},
			{img:'/static/images/singer9.jpg',name:'许巍'},
			{img:'/static/images/singer10.jpg',name:'刘若英'},
			{img:'/static/images/singer11.jpg',name:'许嵩'},
			{img:'/static/images/singer12.jpg',name:'梁静茹'},
			{img:'/static/images/singer13.jpg',name:'火箭少女101'},
			{img:'/static/images/singer14.jpg',name:'马良'},
			{img:'/static/images/singer15.jpg',name:'张杰'},
			{img:'/static/images/singer16.jpg',name:'阿杜'},
			{img:'/static/images/singer17.jpg',name:'王菲'},
			{img:'/static/images/singer18.jpg',name:'冷漠'},
			{img:'/static/images/singer19.jpg',name:'张国荣'}]
		}

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
<template>
	<div id="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for='(item,index) in imgSrc' :key='index' >
					<img  :src="item.picUrl" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from 'Swiper';
import Vue from 'vue';

	export default{
		name:'Banner',
		components:{},
		data(){
			return {
				imgSrc:[]
			}
		},
		methods:{
			getImgData(){
//				https://m.juooo.com/Show/getShowList
//		https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1542248934952
				this.$axios.get('/test/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1542248934952')
				.then((res)=>{
					this.imgSrc=res.data.slider
					Vue.nextTick(()=>{
						var mySwiper = new Swiper('.swiper-container', {
					        loop: true ,// 环路(无缝滚动)
					        autoplay: { // 自动切换
					            delay: 1000, // 自动切换的时间间隔
					        }
						})
					})
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		created() {
			this.getImgData()
		},
		destroyed(){
            // this.mySwiper=null
            delete this.mySwiper
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	@import '../../../node_modules/swiper/dist/css/swiper.css';
	#banner{
		box-sizing:border-box;
		.swiper-container {
			.w(375);
			.h(150);
			img{
				.w(375);
				.h(150);
			}
			
		}
	}
	
</style>
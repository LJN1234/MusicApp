<template>



<transition
            enter-active-class="animated fadeInUp"
            leave-active-class="animated fadeOutDown"
    >
	    <div class="playlist" v-show='show'>
		    <div class="musicList_box">
		        <h1>播放列表（0首）</h1>
			    <ul class="musicList">
			        <li>
			            <span></span>
			            <b> 你还没有添加歌曲</b>
			            <button class="iconfont">&#xe636;</button>
			        </li>
			    </ul>
		        <a href="javascript:;" class="closeList" @click="Close">关闭</a>
		    </div>
	    </div>
    </transition>
    
</template>
<script>
    
    export default{
        name:'PlayList',
		components:{},
		props:['show'],
		data(){
			return {
				
			}
	
		},
		methods:{
			Close(){
				this.isShow=false
			}
		}
    }
</script>
<style>

</style>
<template>
	<div id="singleList">
        <div class="header" :style="{backgroundImage:'url('+this.bg+')'}">
             <listTitle :title="title" ></listTitle>
            
        </div>
        <MusicList :tracks="tracks"></MusicList>
	</div>
</template>

<script>
import listTitle from '../../commons/listTitle'
import MusicList from '../../commons/MusicList'

    export default {
		name: 'SingleList',
        components:{listTitle,MusicList},
        data(){
            return {
                artData:{},
                tracks:[],
                limit:0,
                bg:'',
                title:{
                    title:'',
                    num:-1,
                    bg:''
                },
            }
        },
        computer:{
             getBg(){
                return this.artData.picUrl
            }
        },
	    methods: {
            getData(){
                this.limit=20;
                this.$axios.get(`/weapi/artists?id=${this.$route.params.id}&offset=20&limit=20`)
                .then((res)=>{
                    console.log(res)
                    this.artData=res.artist
                    this.title.title=res.artist.name
                    this.bg=res.artist.picUrl
                    this.tracks=res.hotSongs
                    
                })
            },
        },
        
        mounted(){
            this.$emit('public_header', false);
            this.$emit('public_nav', false);
            this.getData()
        }
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
    #singleList{
        .header{
            .w(375);
            .h(220);
            background-size: 100%;
            background-position: 0 50%;
        }
    }
</style>
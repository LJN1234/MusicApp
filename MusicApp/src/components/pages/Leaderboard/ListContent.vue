<template>
	<div id="listContent">
        <div class="h-con" :style="{backgroundImage:'url('+this.bg+')'}">
            <ListTitle :title="title" ></ListTitle>
            <ListHeader :result="result"></ListHeader>
        </div>
        <MusicList :tracks="tracks"></MusicList>
	</div>
</template>

<script>
import ListHeader from '../../commons/ListHeader'
import ListTitle from '../../commons/ListTitle'
import MusicList from '../../commons/MusicList'

    export default{
        name:'listContent',
        components:{ListHeader,ListTitle,MusicList},
        data(){
            return {
                id:'',
                title:{
                    title:'榜单',
                    num:-1,
                    bg:''
                },
                result:{},
                tracks:[],
                bg:''
            }
        },
        computer:{
            getBg(){
                return this.result.coverImgUrl
            }
        },
        methods:{
        	isLook(){
        		this.$emit('public_header', false);
                this.$emit('public_nav', false);
        	}
        },
        created(){
            this.id = this.$route.params.id;
            // console.log(this.id);
            this.$axios.get(`/weapi/top/list?idx=${this.id}`)
            .then((res)=>{
                // console.log(res.result)
                // this.title.title=res.result.name
                // console.log(this.title)
                this.result=res.result
                // console.log(this.result)
                this.tracks=res.result.tracks
                // console.log(this.tracks)
                this.bg=res.result.coverImgUrl
                // console.log(this.bg)

            })
        },
        mounted(){
        	this.isLook()
        },
        destroyed(){
			this.$emit('public_header', true);
			this.$emit('public_nav', true);
		}
    }
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

    #listContent{
        .h-con{
            .w(375);
            .h(254);
            background-size: 100%;
            background-position: 0 50%;
        }
    }

</style>
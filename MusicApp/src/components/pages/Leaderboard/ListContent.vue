<template>
	<div id="listContent">
        <ListTitle :title="title"></ListTitle>
        <ListHeader :result="result"></ListHeader>
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
                title:'',
                result:'',
                tracks:''
            }
        },
        created(){
            this.id = this.$route.params.id;
            // console.log(this.id);
            this.$axios.get(`/weapi//top/list?idx=${this.id}`)
            .then((res)=>{
                // console.log(res.result)
                this.title=res.result.name
                // console.log(this.title)
                this.result=res.result
                console.log(this.result)
                this.tracks=res.result.tracks
                console.log(this.tracks)

            })
        }
    }
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';


</style>
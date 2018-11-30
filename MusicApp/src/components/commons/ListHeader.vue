<template>
    <div id="listHeader">
        <div class="list-msg">
            <div><i class="fa fa-folder-o"></i><span>{{result.subscribedCount}}</span></div>
           <div><i class="fa fa-commenting-o"></i><span>{{result.commentCount}}</span></div>
           <div><i class="fa fa-share-alt"></i><span>{{result.shareCount}}</span></div>
           <div>
               <i class="fa fa-headphones"></i>
                <span v-if="result.playCount > 100000">{{Math.floor(result.playCount/10000)}}万</span>
                <span v-else>{{result.playCount}}</span>
           </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'ListHeader',
        props: {
			result: {
				type: Object
			}
		}
    }
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
    #listHeader{
        .w(375);
        .h(200);
        position: relative;
        color:#fff;
        .list-msg{
            position: absolute;
            .b(0);
            .w(375);
            .h(60);
            display:flex;
            div{
                flex:1;
                display:flex;
                flex-direction: column;
                justify-content: center;
                .fs(16);
                text-align: center;
                i{
                    .fs(20);
                    .mg(0,0,5,0);
                }
            }
        }
    }

</style>

<template>
    <div id="listHeader">
        <div class="list-desc">
            <div class="list-pic">
                <img :src="result.coverImgUrl" alt="">
                <p>
                    <i class="fa fa-headphones"></i>
                    <span v-if="result.playCount > 100000">{{Math.floor(result.playCount/10000)}}万</span>
                    <span v-else>{{result.playCount}}</span>
                </p>
            </div>
            <div class="list-info">

            </div>
        </div>
        <div class="list-msg">
            <div><i class="fa fa-folder-o"></i><span>{{result.subscribedCount}}</span></div>
           <div><i class="fa fa-commenting-o"></i><span>{{result.commentCount}}</span></div>
           <div><i class="fa fa-share-alt"></i><span>{{result.shareCount}}</span></div>
           <div><i class="fa fa-download"></i><span>下载</span></div>
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
        .h(240);
        background: rgb(13, 138, 110);
        .list-desc{
            .w(355);
            .h(170);
            display:flex;
            .mg(0,10,10,10);
            .list-pic{
                .w(170);
                .h(170);
                position:relative;
                img{
                    .w(170);
                    .h(170);
                    border: 1px solid red;
                }
                p{
                    .w(100);
                    .h(25);
                    position:absolute;
                    .t(3);
                    .r(0);
                    border: 1px solid red;
                    i{
                        position:absolute;
                        .t(0);
                        .l(0);
                       .fs(20); 
                    }
                    span{
                         position:absolute;
                        .t(0);
                        .l(25);
                        .fs(14);
                    }
                }
            }
            .list-info{
                flex:1;
                .fs(16);
                border: 1px solid red;
            }
        }
        .list-msg{
            .w(375);
            .h(60);
            display:flex;
            border: 1px solid red;
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

<template>
    <div class="store_list">
        <div class="head">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="head_text">附近商家</span>
        </div>
        <div class="stores">
            <div class="store-item" v-for="(item,index) in storelist" :key="index">
                <div class="leftImg">
                    <img src="../../assets/bg.png">
                </div>
                <div class="rightInfo">
                    <div class="name">
                        <i class="iconfont icon-tubiaozhizuomoban"></i>
                        <span class="name_text">张亮麻辣烫</span>
                    </div>
                    <div class="commen">
                        <i class="iconfont icon-star"></i>
                        <i class="iconfont icon-star"></i>
                        <i class="iconfont icon-star"></i>
                        <span class="starnum">5.0</span>
                        <span class="sale">月售1130</span>
                    </div>
                    <div class="send">
                        <span>¥20起送价 / 配送费约¥2.0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                storelist:[1,22,2,2,2]
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/styles">
    @import "../../common/stylus/mixins.styl"
    .store_list
        top-border-1px(#d1d9d9)
    .head
        padding 5px
        .head_text
            color #5a5e5e
            font-size 16px
            margin-left 5px
    .stores
        .store-item
            display flex
            top-border-1px(#d1d9d9)
            .leftImg img
                width 100px
                height 100px
                margin-right 5px
            .rightInfo
                padding 10px
                display flex
                flex-direction column
                justify-content space-around
                font-size 14px
                color #777b7b
                .name_text
                    font-size 18px
                    margin 0 20px
                    color black
                .starnum
                    color #f8aa16
                    margin 0 10px
</style>

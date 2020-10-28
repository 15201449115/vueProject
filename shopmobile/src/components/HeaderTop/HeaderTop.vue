<template>
    <div class="header">
        <slot name="left"></slot>
        <div class="top_title">
            <span class="top_title_text">{{title}}</span>
        </div>
        <slot name="right"/>
    </div>
</template>
<script>
    export default {
        props:{
            title : String
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .header
        width 100%
        background-color #54afe0
        height 50px
        line-height 50px
        display flex
        bottom-border-1px(#34383b)
        justify-content space-around
        .iconfont
            color #fff
            font-size 26px
        .top_title_text
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            color #fff
            font-size 18px
        .top_login_text
            color #fff
            font-size 18px
</style>

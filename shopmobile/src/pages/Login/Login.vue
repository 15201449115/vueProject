<template>
    <div class="login">
        <div class="back">
            <span @click="$router.back()">
                <i class="iconfont icon-jiantou-copy"></i>
            </span>
        </div>
        <div class="h-name">
            猪猪外卖
        </div>
        <div class="do-login">
            <div class="l-title">密码登录</div>
            <div>
               <div class="info">
                   <span class="lab">账号：</span>
                   <input class="info-input"/>
               </div>
                <div class="info">
                    <span class="lab">密码：</span>
                    <input class="info-input"/>
                </div>
                <div class="tips_text">温馨提示：不要吃太多，会胖哦</div>
            <div/>
        </div>
            <div class="btn">
                <button class="sub">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
.login
    padding 10px
    .h-name
        font-size 30px
        margin 20px 0px
        text-align center
        color #8ed5d5
    .do-login
        width 80%
        margin 0 auto
        .info
            border 1px solid #ccc
            height 40px
            line-height 40px
            border-radius 5px
            padding-left 5px
            margin-bottom 10px
            .lab
                font-size 16px
            .info-input
                height 36px
                line-height 36px
                font-size 16px
                border none
                color #031223
                outline none
        .l-title
            text-align center
            padding 20px
            font-size 18px
            bottom-border-1px(#d0c6c6)
        .tips_text
            color #5c5f5f
            font-size 12px
            margin-top 10px
        .btn
            text-align center
            margin-top 30px
            .sub
                width 50%
                height 40px
                background-color #98e2c1
                border none
                color #878080
                font-size 18px
                border-radius 10px
</style>

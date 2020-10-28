<template>
    <div>
        <HeaderTop title="我的" />
        <router-link to="/login" class="login-file">
            <div class="userimg">
                <i class="iconfont icon-geren"></i>
            </div>
            <div class="userinfo">
                <div class="tolog">登录/注册</div>
                <div class="p-bind">
                    <i class="iconfont icon-jifen"></i>
                    <span>暂无绑定手机号</span>
                </div>
            </div>
            <div><i class="iconfont icon-arrow-right"></i></div>
        </router-link>
    </div>
</template>
<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop";

    export default {
        components:{HeaderTop}
    }
</script>
<style lang="stylus" rel="stylesheet/styles">
    @import "../../common/stylus/mixins.styl"
.login-file
    display flex
    justify-content space-around
    align-items center
    background-color #6a8e8e
    height 80px
    top-border-1px(#fff)
    .icon-geren
        font-size 40px
    .userinfo
        width 50%
        color #f1f0f0
        font-size 18px
    .p-bind
        margin-top 6px
        font-size 14px
    .icon-jifen
        font-size 22px
</style>

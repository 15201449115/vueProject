<template>
    <div class="msiter">
        <!--首页头部-->
        <HeaderTop title="南京东路137号" >
            <div class="search" slot="left">
                <i class="iconfont icon-Search"></i>
            </div>
            <div class="right" slot="right">
                <span class="top_login_text">登录｜注册</span>
            </div>
        </HeaderTop>
        <!--首页导航-->
        <div class="swiper_nav">
            <swiper />
        </div>
        <StoreList />
    </div>
</template>
<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop"
    import Swiper from  "../../components/Swiper/Swiper"
    import StoreList from "../../components/StoreList/StoreList"
    export default {
        components:{HeaderTop ,Swiper,StoreList},
    }
</script>
<style lang="stylus" rel="stylesheet/styles">
    .swiper_nav
        background-color #ebf5f5
</style>

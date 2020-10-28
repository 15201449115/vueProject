<template>
    <!-- Swiper -->
    <div class="nav_swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="nav_info">
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwu"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin1"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin2"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin12"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin9"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin14"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin14"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin10"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="nav_info">
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin9"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin14"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin14"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin10"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin9"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin14"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin14"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                        <div class="info-item">
                            <div class="icon"><i class="iconfont icon-shiwuqimin10"></i></div>
                            <div class="info_item_text">汉堡</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div> <!-- Add Pagination -->
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import '../../mock'
    import {goodsCatelist} from '../../api/index'
    export default {
        mounted() {
            new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
            });
            this.getnavlist()
        },
        methods :{
            getnavlist(){
                goodsCatelist().then(res=>{
                   console.log(res,'11')
                })
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .nav_swiper
        .nav_info
            display flex
            flex-wrap wrap
            justify-content space-around
            margin 10px 0px 10px
        .info-item
            width 22%
            text-align center
            margin-bottom 20px
        .info_item_text
            font-size 12px
            margin-top 5px
            color #424040
        .iconfont
            font-size 26px
            color #d9ab60
</style>

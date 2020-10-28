/*
* 入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/reset.css' //重置css样式表
import './mock/index'
new Vue({
    el: '#app',
    render: h =>h(App),
    router
})


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import app from './app.vue'
import {Header} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name,Header)
var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
})

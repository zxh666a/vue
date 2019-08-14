import Vue from 'vue'
import app from './app.vue'
import {Header} from 'mint-ui'
import './lib/mui/css/mui.min.css'
Vue.component(Header.name,Header)
var vm = new Vue({
    el:'#app',
    render:c => c(app)
})

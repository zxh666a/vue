import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
return moment(dataStr).format(pattern)
})
import router from './router.js'
import app from './app.vue'
// import {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
})

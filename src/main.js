import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vuex from 'vuex'
Vue.use(Vuex)
var shopcar = JSON.parse(localStorage.getItem('shopcar') || '[]')
var store = new Vuex.Store({
    state: {
        shopcar: shopcar
    },
    mutations: {
        addTocar(state, goodsinfo) {
            var flag = false;
            // 如果购物车种已经有了该商品，则直接添加数量 如果没有，则吧商品数据push进car中
            state.shopcar.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.shopcar.push(goodsinfo)
            }
            localStorage.setItem('shopcar', JSON.stringify(state.shopcar))
        },
        updategoodscar(state, goodsinfo) {// 修改购物车商品的count
            state.shopcar.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('shopcar', JSON.stringify(state.shopcar))
        },
        removefromstore(state, id) { //根据id从store中删除对应商品数据
            state.shopcar.some((item, i) => {
                if (item.id == id) {
                    state.shopcar.splice(i, 1)
                    return true
                }
            })
            localStorage.setItem('shopcar', JSON.stringify(state.shopcar))
        },
        uodateselected(state, info) {
            state.shopcar.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected

                }
            })
            localStorage.setItem('shopcar', JSON.stringify(state.shopcar))
        }
    },
    getters: {
        getallcount(state) {
            var c = 0;
            state.shopcar.forEach(item => {
                c += item.count
            })
            return c
        },
        getgoodscount(state) {
            // 创建一个对象，然后循环shopcar 得到这个对象 以id作为属性名，count作为属性值 这样就可以拿到商品的数量
            var o = {}
            state.shopcar.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getgoodsselected(state) {
            var o = {}
            state.shopcar.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getamount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.shopcar.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
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
    el: '#app',
    render: c => c(app),
    router,
    store
})

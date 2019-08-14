import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shop from './components/tabbar/shop.vue'
var router = new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shop',component:shop}
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类 router-link-active
})

export default router
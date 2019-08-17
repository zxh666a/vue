import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shop from './components/tabbar/shop.vue'
import newlist from './components/news/newlist.vue'
import newinfo from './components/news/newinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodlist from './components/goodlist/goodlist.vue'
import goodsinfo from './components/goodlist/goodsinfo.vue'
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shop',component:shop},
        {path:'/home/newlist',component:newlist},
        {path:'/home/newinfo/:id',component:newinfo},
        {path:'/home/photolist',component:photolist},
        {path:'/home/photoinfo/:id',component:photoinfo},
        {path:'/home/goodlist/',component:goodlist},
        {path:'/home/goodsinfo/:id',component:goodsinfo}
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类 router-link-active
})

export default router
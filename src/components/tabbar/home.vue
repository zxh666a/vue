<template>
  <div>
    <!-- 轮播图 -->
  <swiper :lunbotulist="lunbotulist" :isfull="true"></swiper>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/newlist'>
         <img src="../../image/新闻.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
            <img src="../../image/相册.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodlist">
        <img src="../../image/商品购买.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/交流.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
        <img src="../../image/视频.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/联系我们.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponents/swiper.vue"
export default {
  data() {
    return {
      lunbotulist: [] //保存轮播图
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("api/getlunbo")
        .then(result => {
          if (result.body.status === 0) {
            this.lunbotulist = result.body.message;
          } else {
            Toast("获取失败");
          }
        });
    }
  },
  components:{swiper}
};
</script>
<style lang="scss" scoped>


.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img {
        height: 60px;
        width: 60px
    }

}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
        .mui-media-body{
        font-size: 13px;
    }
}
</style>
<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <!-- 组件中使用v-for必须用key -->
      <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

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

    <h3>home</h3>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
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
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: cyan;
    }
    &:nth-child(3) {
      background-color: blue;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

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
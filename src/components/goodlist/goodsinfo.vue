<template >
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>
    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotulist="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>{{goodsinfo.marker_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numbox @getcount="getnum" :max="goodsinfo.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addshopcar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品详情</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}</p>
          <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_numberbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsinfo: {},
      ballflag: false, // 小球隐藏和显示的标识符
      count: 1
    };
  },
  created() {
    this.getlunbotu();
    this.getgoodsinfo();
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      });
    },
    getgoodsinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    },
    goDesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    addshopcar() {
      this.ballflag = !this.ballflag;
      var goodsinfo = {
        id: this.id,
        count: this.count,
        price: this.goodsinfo.sell_price,
        selected: true
      };
      this.$store.commit("addTocar",goodsinfo)
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      // 获取小球的位置
      const ballposition = this.$refs.ball.getBoundingClientRect();
      const huibiaoposition = document
        .getElementById("huibiao")
        .getBoundingClientRect();
      const xDist = huibiaoposition.left - ballposition.left;
      const yDist = huibiaoposition.top - ballposition.top;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 0.4s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag;
    },
    getnum(count) {
      // 购物车数量变化
      this.count = count;
      console.log(this.count);
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    font-size: 16px;
    color: red;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .ball {
    position: absolute;
    z-index: 99;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    top: 422px;
    left: 132px;
  }
}
</style>
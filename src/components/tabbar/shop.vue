<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 列表区域 -->
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getgoodsselected[item.id]"
              @change="selectedchanged(item.id,$store.getters.getgoodsselected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path" alt />
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getgoodscount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>
              总计（不含运费）
            </p>
            <p>
              已勾选商品
              <span class="red">{{$store.getters.getamount.count}}</span>件,总价
              <span class="red">{{$store.getters.getamount.amount}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numbox from "../subcomponents/numbox.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getcar();
  },
  methods: {
    getcar() {
      // 获取car中商品的id 拼接字符串
      var idArr = [];
      this.$store.state.shopcar.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) {
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
          }
        });
    },
    remove(id, index) {
      this.goodslist.splice(index, 1);
      this.$store.commit("removefromstore", id);
    },
    selectedchanged(id,val){
        // 吧开关状态同步到store中
        this.$store.commit('uodateselected',{id,selected:val})
    }
  },
  components: {
    numbox
  }
};
</script>
<style lang="scss" scoped>
.shopcar-container {
  background-color: #ccc;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      padding: 0;
    }
    img {
      width: 60px;
      height: 60px;
    }
    h1 {
      font-size: 14px;
    }
    .info {
      .price {
        font-size: 16px;
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
    }
  }
}
</style>
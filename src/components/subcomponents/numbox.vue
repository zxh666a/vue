<template>
  <div class="numbox">
    <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="initcount"
        @change="countchanged"
        ref="numbox"
      />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    // 初始化
    mui(".mui-numbox").numbox();
  },
  methods: {
    countchanged() { //吧最新数量更新到store中
      this.$store.commit('updategoodscar',{id:this.goodsid,count:this.$refs.numbox.value})
      console.log(this.$refs.numbox.value)
    }
  },
  props: ["initcount",'goodsid']
};
</script>
<style lang="scss" scoped>
.numbox {
  display: inline-block;
}
</style>
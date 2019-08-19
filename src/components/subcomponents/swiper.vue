<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 组件中使用v-for必须用key -->
      <!-- 谁试用轮播图组件 谁传递lunbotulist 组件传值设置-->
      <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
        <img :src="item.img" :class="{'full':isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    props:["lunbotulist","isfull"]
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
      text-align: center;
    img {
    //   width: 100%;
      height: 100%;
    }
  }
  .full{
      width:100%
  }
}
</style>
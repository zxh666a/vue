<template>
  <div class="app-container">
    <!--header-->
    <mt-header fixed title="主页"></mt-header>
    <!--router-view-->
<transition>
    <router-view></router-view>
</transition>
    <!--tabbar-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-zxh " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-zxh" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-zxh" to="/shop">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="huibiao">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-zxh" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.mint-header{
  z-index: 99
}
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden
}

.v-enter{
  opacity: 0;
  transform: translateX(100%);
  position: absolute
}
.v-leave-to{
    opacity: 0;
  transform: translateX(-100%);
    position: absolute
}

.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease
}

.mui-bar-tab .mui-tab-item-zxh .mui-active{
  color:#007aff;
}

.mui-bar-tab .mui-tab-item-zxh{
  display:yable-cell;
  overflow:hidden;
  width: 1%;
  text-align: center;
  vertical-align: middle;
  white-space: no wrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-zxh .mui-icon{
  top:3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-zxh .mui-icon .mui-tab-label{
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
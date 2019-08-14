<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
        <!-- 组件中使用v-for必须用key -->
      <mt-swipe-item v-for='item in lunbotulist' :key="item.url">
          <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h3>home</h3>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            lunbotulist:[] //保存轮播图
        }
    },
    created() {
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result =>{
                if(result.body.status === 0){
                    this.lunbotulist = result.body.message
                }else {
                    Toast('获取失败');
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height:200px;

.mint-swipe-item{
    &:nth-child(1){
        background-color: red;
    }
        &:nth-child(2){
        background-color: cyan;
    }
        &:nth-child(3){
        background-color: blue;
    }
    img{
        width: 100%;
        height: 100%
    }
}
}
</style>
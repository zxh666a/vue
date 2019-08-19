<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countchanged" ref="numbox"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js"
export default {
    mounted(){
        // 初始化
        mui(".mui-numbox").numbox()
    },
    methods: {
      countchanged(){
        this.$emit("getcount",parseInt(this.$refs.numbox.value))
      }
    },
    props:["max"],
    watch:{
      // 通过watch监听 知道max的值改变 
      "max":function(newVal,oldVal){
        mui().numbox('.mui-numbox').setOption("max",newVal)
      }
    }
};
</script>
<style lang="scss" scoped>
</style>
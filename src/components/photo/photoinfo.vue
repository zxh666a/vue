<template>
  <div class="photoinfo-cpntainer">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoinfo.add_time | dateFormat}}</span>
      <span>点击次数：{{photoinfo.click}}次</span>
    </p>
    <hr />

    <!-- 缩略图区域 -->
    <vue-preview :slides="list" ></vue-preview>
    <vue-preview :slides="list" ></vue-preview>
    <!-- 图片内容 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论子组件 -->
    <cmt :id="id"></cmt>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      list:[],
      photoinfo: {
        title: "这是详情标题",
        add_time: 2019 - 8 - 17,
        content: "请求的网址好像出问题了",
        click: 1
      },
    //   slide1: [
    //     {
    //       src:
    //     'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
    //       msrc:
    //       'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
    //       alt: "picture1",
    //       title: "Image Caption 1",
    //       w: 200,
    //       h: 200
    //     },
    //   ]
    };
  },
  creat() {
    // this.getphotoinfo()
    this.getthumbs()
  },
  methods: {
    // getphotoinfo(){
    //     this.$http.get('api/getimageInfo/' + this.id).then(result =>{
    //         if(result.body.ststus === 0){
    //             this.photoinfo = result.body.message[0]
    //         }
    //     })
    // }
    getthumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.ststus === 0) {
         result.body.message.forEach(item =>{
             item.w = 600
             item.h = 400;
         });
          this.list = result.body.message;
        }
      });
    }
  },
  components: {
    cmt: comment
  }
};
</script>
<style lang="scss" scoped>
.photoinfo-cpntainer {
  padding: 3px;
  h3 {
    color: cyan;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 39px;
  }
}
</style>
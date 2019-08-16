<template>
  <div class="cmt-container">
    <h1>发表评论</h1>
    <hr />
    <textarea placeholder="请输入内容（做多120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div
          class="cmp-title"
        >第{{i+1}}楼&nbsp;&nbsp;{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content ==='undefined'?'此用户很懒什么也没说':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1, //默认展示第一页数据
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getcomments();
  },
  methods: {
    getcomments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=1" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            // 不把老数据覆盖
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("加载失败");
          }
        });
    },
    getmore() {
      this.pageindex++;
      this.getcomments();
    },
    postcomment() {
      // 校验内容是否为空
      if (this.msg.trim().length === 0) {
        return Toast("内容不能为空");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            //拼接评论对象
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = ''
          }
        });
    }
  },
  props: ["id"]
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmp-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 30px;
        text-indent: 2em;
      }
    }
  }
}
</style>
<template>
    <div class="goodsdesc">
        <h3 class="title">{{info.title}}</h3>

        <hr>

        <div class="content" v-html="info.content">

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:{}
        }
    },
    created() {
        this.gettuwen()
    },
    methods:{
        gettuwen(){
                  this.$http.get("api/goods/getdesc/" + this.$route.params.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0];
        }
      });
        }
    }
}
</script>
<style lang="scss" >
.goodsdesc{
        padding: 4px;
.title{
    font-size: 14px;
    color: red;
    text-align: center;
    margin: 20px
}
.content{

 img{
        width: 100%
 }
}
}

</style>
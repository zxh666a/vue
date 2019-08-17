<template>
  <div class="goods-list">
    <div class="goods-item">
      <img
        src="https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=3d9fc10fa3014c08063b2ea53a7a025b/359b033b5bb5c9eac1754f45df39b6003bf3b396.jpg"
        alt
      />
      <h1 class="title">xiaomi</h1>
      <div class="info">
        <p class="price">
          <span class="now">2199</span>
          <span class="old">2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：50件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=3d9fc10fa3014c08063b2ea53a7a025b/359b033b5bb5c9eac1754f45df39b6003bf3b396.jpg"
        alt
      />
      <h1 class="title">xiaomi</h1>
      <div class="info">
        <p class="price">
          <span class="now">2199</span>
          <span class="old">2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：50件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=3d9fc10fa3014c08063b2ea53a7a025b/359b033b5bb5c9eac1754f45df39b6003bf3b396.jpg"
        alt
      />
      <h1 class="title">xiaomi</h1>
      <div class="info">
        <p class="price">
          <span class="now">2199</span>
          <span class="old">2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：50件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        width: 49%;
        border: 1px solid #ccc;
        box-shadow:0 0  4px;
        margin: 3px 0;
        padding: 2px;
        img{
            width: 100%;

        }
        .title{
            font-size: 14px;
            padding: 5px;
        }
        .info{
            p{
                margin: 0;
            }
            background-color: #eee;
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;

            }
        }
    }
}
</style>
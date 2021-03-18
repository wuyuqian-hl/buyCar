<template>
  <div class="container">
    <div class="pic">
      <img :src="item.zq45d" alt="">
    </div>
    <div class="info">
      <div>
        <h3><span>市场</span>{{item.car_model}}</h3>
      </div>
      <p>{{item.card_date}}/{{item.mileage}}万公里</p>
      <span class="price">￥{{item.sell_price}}万元</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      item:{
        type:Object,
        default:()=>{
          return {}
        }
      }
    },
  
  }
</script>

<style lang="less" scoped>
.container{
  border: 1px solid rgb(211, 204, 204);
  .pic{
  width: 100%;
  overflow: hidden;
  height: 205px;
  position: relative;
    img{
      position: absolute;
      width: 100%;
      height: 200px;
    }
  }
  .info{
    margin-left: 10px;
    h3{
    margin: 0;
    padding: 0;
      font-weight: normal;
      width: 325px;
      // 文字超出用。。。表示
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #606266;
      span{
        background: turquoise;
        border-radius: 4px;
        margin-right: 5px;
        color: #fff;
        display: inline-block;
        height: 25px;
        font-size: 16px;
      }
    }
    p{
      margin: 0;
      padding: 0;
      margin-top: 10px;
      color: #606266;
    }
    .price{
      display: inline-block;
      margin-top: 10px;
      color: rgb(211, 38, 38);
      font-size: 18px;
    }
  }
}

</style>
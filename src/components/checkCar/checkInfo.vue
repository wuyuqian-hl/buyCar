<template>
  <div>
    <div class="info_inner">
        <i class="el-icon-truck"></i>
        <p class="fabu">发布于：{{infoList.created_at}}</p>
        <h2>{{infoList.car_model}}</h2>
        <p class="hao">车牌号：{{infoList.plate_num}}</p>
        <div class="shoujia">
          <div class="jiage">商家报价：<span>￥{{infoList.sell_price}}万</span>车辆行驶里程及价格以实车为准</div>
        </div>
        <div class="center">
          <ul>
            <li><div class="time">{{infoList.card_date}}<div>上牌时间</div></div></li>
            <li><div class="time">{{infoList.mileage}}万公里<div>表显里程</div></div></li>
            <li><div class="time">{{infoList.car_gear_box}}<div>变速箱</div></div></li>
            <li><div class="time">{{infoList.car_fuel_type}}<div>燃油类型</div></div></li>
            <li><div class="time">{{infoList.city}}<div>上牌地</div></div></li>
          </ul>
        </div>
        <div class="gongsi">
          <div class="cont">
            <h3>{{infoList.market_title}}</h3>
            <p class="dizhi">出售地址：{{infoList.market_address}}</p>
            <p>销售电话：{{infoList.tel}}</p>
            <span>在售车辆：{{infoList.market_car_count}}</span>
          </div>
          <div class="img">
            <img src="/uploads/editor/20180727/843c7b9ba8e669a59a75fbe345b7ff42.jpg" alt="">
          </div>
        </div>
     
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      infoList:{
        type:Object,
        default:()=>{
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.info_inner{
  width: 100%;
  padding-left: 30px;
  .fabu{
    margin: 0;
    color: rgb(153, 152, 152);
  }
  h2{
    margin: 0;
    padding: 0;
    margin-top: 5px;
  }
  .hao{
    margin-top: 5px;
    padding: 0;
    color: rgb(153, 152, 152);
  }
  .shoujia{
    width: 100%;
    height: 66px;
    background: #eee;
    line-height: 66px;
    .jiage{
      margin-left: 10px;
      display: inline-block;
      span{
        color: rgb(224, 22, 22);
        font-size: 22px;
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
  .center{
    width: 100%;
    height: 100px;
    padding: 0;
    ul{
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
      li{
        float: left;
        width: 19.8%;
        height: 80px;
        margin-top: 10px;
        line-height: 30px;
        text-align: center;
        .time{
          border-right: 1px dashed #eee;
          div{
            
           color: rgb(153, 152, 152);
           font-size: 14px;
          }
        }
      }
    }
  }
  .gongsi{
    width: 50%;
    height: 160px;
    background: #f0d48c;
    border: 1px dashed rgb(235, 201, 9);
    position: absolute;
    .cont{
      margin-left: 30px;
      h3{
        margin: 0;
        padding: 0;
        margin-top: 20px;
      }
      p{
        margin: 0;
        margin-top:8px;
        padding: 0;
        &.dizhi{
          color: rgb(116, 114, 114);
        }
      }
      span{
        color: rgb(218, 13, 13);
      }
    }
    .img{
      float: right;
      position: absolute;
      top: 15px;
      right: 0px;
      
      img{
        border-radius: 20%;
        width: 130px;
        height: 130px;
      }
    }
  }
}
// .info{
//   margin-left: 20px;
//   .timeInfo p{
//     margin:0;
//     padding: 0;
//     font-weight: 600;
//   }
//   .updata{
//     margin-top: 30px;
//     p{
//       margin: 0;
//       padding: 0;
//       font-weight: 500;
//     }
//   }
//   .piple{
//     margin-top: 30px;
//     p{
//       margin: 0;
//       padding: 0;
//       font-weight: 500;
//     }
//   }
//   .meamy{
//     margin-top: 20px;
//     img{
//       margin-top: 20px;
//       width: 80px;
//       height: 80px;
//       margin-right: 10px;
//     }
//   }
// }
</style>
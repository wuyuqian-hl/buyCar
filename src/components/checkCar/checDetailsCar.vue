<template>
  <div class="check">
    <div class="buycar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/buy-car' }">统计列表</el-breadcrumb-item>
         <el-breadcrumb-item :to="{ path: '/Details' }">视图列表</el-breadcrumb-item>
        <el-breadcrumb-item>买车详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="inner">
      <div class="left">
        <CheckImg :checkImg="carImg"></CheckImg>
      </div>
      <div class="right">
        <Checkinfo :infoList="infoList"></Checkinfo>
      </div>
    </div>
    <div class="condition">
      <div class="t_left">
          车况信息
      </div>
      <div class="t-right">
        <p>使用性质：\</p>
        <p>年检到期：\</p>
        <p>交强险到期：\</p>
        <p>过户次数：\</p>
        <p>保养方式：\</p>
      </div>
    </div>
    <div class="table">
      <table>
        <tr>
          <td>品牌</td>
          <td>{{infoList.car_brand}}</td>
          <td>车型</td>
          <td colspan="3">{{infoList.car_model}}</td>
        </tr>
        <tr>
          <td>车系</td>
          <td>{{infoList.car_series}}</td>
          <td>车款</td>
          <td>{{infoList.car_kuan}}</td>
          <td>排量</td>
          <td>{{infoList.mileage}}</td>
        </tr>
        <tr>
          <td>变速箱</td>
          <td>{{infoList.car_gear_box}}</td>
          <td>燃油类型</td>
          <td>{{infoList.car_fuel_type}}</td>
          <td>车主姓名</td>
          <td>{{infoList.link_man}}</td>
        </tr>
      </table>
    </div>
    <div class="conditiont">
      <div class="t_left">
          详情图片
      </div>
      <div class="t-right">
      </div>
    </div>
    <div class="xqImg">
      <ul>
         <li v-for="(item,index) in carImg" :key="index"><img :src="item" /></li>
      </ul>
    </div>
    <div class="footer">
      <div class="f_footer">
       <div class="f_left">
         <dl>
           <dt>关于我们</dt>
           <dd>企业简介</dd>
           <dd>人才招聘</dd>
           <dd>师资力量</dd>
           <dd>企业服务</dd>
         </dl>
         <dl>
           <dt>服务保障</dt>
           <dd>分期付款</dd>
           <dd>服务协议</dd>
           <dd>退款规则</dd>
           <dd>发票申请</dd>
         </dl>
         <dl>
           <dt>服务中心</dt>
           <dd>报名流程</dd>
           <dd>咨询客服</dd>
           <dd>反馈建议</dd>
           <dd>我要投诉</dd>
         </dl>
       </div>
       <div class="f_right">
         <div class="call">
           <h3>联系我们</h3>
          <p class="cur">邮箱：767169735@qq.com</p>
          <p>工作时间：8：0~24:00</p>
         </div>
         <div class="wx">
           <div>
             <img src="@/assets/wx.jpg" alt="">
             <p>微信公众号</p>
           </div>
         </div>
         <div class="wx">
            <div>
             <img src="@/assets/consultant.png" alt="">
             <p>课程顾问</p>
           </div>
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckImg from './checkImg'
import Checkinfo from './checkInfo'
  export default {
    components:{
      CheckImg,
      Checkinfo
    },
    mounted(){
      this.CarcheckList()
    },
    data(){
      return {
        infoList:{},
        carImg:[],//图集展示数组
        Imgarr:['yh45d','zcf','zhf','zktzz','zq45d','zqf','lt','td','wd']
      }
    },
    methods:{
      CarcheckList(){
        let id = this.$route.query.id;
        if(!id){
          this.$router.push('/buy-car')
          this.$Message.error("当前id不存在，请重试")
        }
        this.$http.get('/webservice/search/vehicleinfo/jp/1',{params:{id}}).then((res)=>{
          let data = res.data;
          this.infoList = data.data;
          //遍历数组，如果总数据中有他并且数组图集中没有他就push到数组图集中，有的话就不存，去重
          this.Imgarr.forEach((item)=>{
            if(this.infoList[item] && !this.carImg.includes(this.infoList[item])){
            this.carImg.push(this.infoList[item])
          }
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.check{
  position: relative;
  left: 0;
  top: 0;
  
  width: 100%;
  .buycar{
    width: 75%;
    margin: 20px auto;
  }
  .inner{
    width: 75%;
    height: 100%;
    display: flex;
    margin: 20px auto;
    position: relative;
    .left{
      flex: 1;
    }
    .right{
      flex: 1;
      // background: greenyellow;
    }
  }
  .condition{
    width: 75%;
    margin: 20px auto;
    display: flex;
    margin-top: 130px;
    justify-content: space-between;
    background: #eee;
    line-height: 40px;
    text-align: center;
    border-left: 5px solid rgb(235, 44, 44);
    padding-left: 10px;
    .t_left{
      font-size: 18px;
      font-weight: 700;
      // margin-top: 20px;
    }
    .t-right{
      display: flex;
      p{
        margin-right: 25px;
      }
    }
  }
  .table{
    width: 75%;
    margin: 20px auto;
    table{
      width: 100%;
      border: 1px solid #DCDFE6;
      border-collapse: collapse;
      height: 100px;
      tr,td{
        border: 1px solid #DCDFE6;
        text-align: center;
      }
    }
  }
  .conditiont{
    width: 75%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    background: #eee;
    line-height: 40px;
    border-left: 5px solid rgb(235, 44, 44);
    padding-left: 10px;
    .t_left{
      font-size: 18px;
      font-weight: 700;
    }
  }
  .xqImg{
    width: 75%;
    margin: 20px auto;
    ul{
      list-style: none;
      display: flex;
      width: 100%;
      li{
        float: left;
        margin-right: 5px;
        flex: 1;
        img{
          height:300px;
          width: 100%;
        }
      }
    }
  }
  .footer{
    width: 100%;
    height: 200px;
    margin: 0 auto;
    background: rgb(61, 61, 60);
    padding-top: 30px;
    .f_footer{
      width: 75%;
      display: flex;
      margin: 0 auto;
        color: #fff;
      .f_left{
        flex: 1;
        display: flex;
        dl{
          margin-right: 50px;
            text-align: center;
          flex: 1;
          dt{
            font-size: 28px;
            margin-bottom: 10px;
          }
          dd{
            margin-top: 10px;
          }
        }

      }
      .f_right{
        flex: 1;
        display: flex;
        padding-left: 90px;
        border-left: 1px solid #fff;
        h3{
          font-size: 28px;
        }
        div{
          flex: 1;
        }
        .call{
          .cur{
            margin-top: 40px;
          }
          p{
            margin-bottom: 20px;
          }
        }
        .wx{
          div{
          text-align: center;
          width:120px;
          height: 140px;
          margin-top: 10px;
          padding-top: 10px;
          background: #fff;
          color: #000;
          font-size: 18px;
          font-weight: 600;
          }
          img{
            width: 104px;
            height: 104px;
          }
        }
      }
    }
  }
}
</style>
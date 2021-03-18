<template>
  <div class="container">
    <div class="screen">
      <ViewsScreen @changeState="changeState" @changeUnlimited="changeUnlimited" v-for="(item,index) in ScreenData" :key="index" :Screentype="item.type" :list="item.list" :name="item.name"></ViewsScreen>
    </div>
    <div class="viewPic">
      <!-- 由于我们想要点击的是他的图片去跳转而不是viewsImg本身，所以点击事件需要加上native,这样才能触发他的图片点击 -->
      <ViewsImg class="viewItem" @click.native="toditil(item.id)" v-for="(item,index) in Tabdata" :key="index" :item="item"></ViewsImg>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-sizes="[50, 100, 150, 200]"
        :page-size="per_page"
        layout="total, prev, pager, next, jumper"
        :total="total_count">
      </el-pagination>
    </div>
    <div  v-loading="loading"></div>
  </div>
</template>

<script>
import ViewsScreen from "./viewsScreen"
import ViewsImg from "./viewsImg"
import ScreenData from '@/link/CarScreen.js'
var serData = {
  city:null, //城市
  age:null,  //车龄
  mileage:null,  //车里程
  // emission:null,  排放标准
  brand:null,   //品牌
  series:null,  //车系
  gearbox:null,  //变速箱
  displacement:null,  //排量
  price:null,  //售价
}
  export default {
    components:{
      ViewsImg,
      ViewsScreen
    },
    data(){
      return {
        Tabdata:[],
        page:1, // 当前页数
        per_page:20, //当前显示条数
        currentPage:1,
        total_count:1,
        formData:JSON.parse(JSON.stringify(serData)),
        ScreenData:ScreenData,
        loading:false,
      }
    },
    created(){
      this.getList()
    },
    methods:{
      dealData(){
        let obj = this.formData;
        obj.page = this.page;
        obj.per_page = this.per_page;
        obj.ispt = 0;
        return obj
      },
      getList(){
        this.loading = true;
         this.$http.get('/webservice/search/vehicleList/jp/1', {params:this.dealData()}).then((res)=>{
            let data = res.data
            console.log(data)
            //将返回的数据data存储到this.Tabdata数组中
            this.Tabdata = data.data
            //总条数等于数据的总条数
            this.total_count = data.total_count;
            this. loading = false; //加loding状态，
         })
      },
      handleSizeChange(val){
        //条数
        this.per_page = val;
        //发送请求
        this.getList();
      },
      handleCurrentChange(val){
        //当前页数等于页面点击的页数下标，由1开始
        this.page = val,
        //发送请求
        this.getList()
      },
      toditil(id){
        let obj = {
          path:"/checkCar",
          query:{
            id
          }
        }
        // return obj;
        this.$router.push(obj)
      },
      changeState(val,type){
        for(var k in this.formData){
          if(k == type){
            this.formData[k] = val
          }
        }
        this.getList()
      },
      changeUnlimited(val,type){
        for(var k in this.formData){
          if(k == type){
            this.formData[k] = val
          }
        }
        this.getList()
        // if(type in this.formData){
        // this.getList()
        // }
      }
    }
  }
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  .screen{
    margin-left: 10px;
  }
  .viewPic{
      display: flex;
      flex-wrap: wrap;
    .viewItem{
      flex: calc(20% - 20px);
      height: 300px;
      margin: 0 5px 10px 5px;
    }
  }
  .block{
    width: 100%;
  }
}
</style>
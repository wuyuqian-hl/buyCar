<template>
  <div id="app">
    <!-- 优化element-ui表格的组件 -->
    <!-- <Tabley></Tabley> -->
    <el-header width="100%">
      <ul class="ul" >
        <li>
          <img src="" alt="" srcset="">
        </li>
        <li v-for="(item,index) in RouterDate" :key="index" @click="changeRouter(item.path,index)" :class="{cur: index == curStart}" >
          <span>{{item.title}}</span>
        </li>
      </ul>
    </el-header>
    <el-container>
    <el-aside width="100%">
      <router-view></router-view>
    </el-aside>
    <el-main>
    </el-main>
  </el-container>
  </div>
</template>

<script>
// import Tabley from './components/tableyouhua.vue'
export default {
  name: 'App',
  components: {
    // Tabley
   
  },
  data(){
    return {
      //加cur index=curStart
      curStart : 0,
      RouterDate:[
        {
          path:'/home',
          title:'首页'
        },
        {
          path:'/buy-car',
          title:'我要买车'
        },
        {
          path:'',
          title:'购车服务'
        },
        {
          path:'',
          title:'购车优惠'
        },
        {
          path:'',
          title:'云客服'
        },
      ]
    }
  },
  methods:{
      changeRouter(router,index){
        this.curStart=index
        this.$router.push(router)
      }
    }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 1206px;
  height: 100%;
}
 .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: fixed;
    top: 0;
    left: 0px;
    width: 100%;
    ul{
      list-style: none;
      display: flex;
      line-height: 60px;
      margin: 0;
      padding: 0;
      li{
        flex: 1;
        cursor: pointer;
        color: #fff;
      &.cur{
        background: rgb(231, 197, 110);
      }
      }
    }
  }
  .el-aside{
    // top: 60px;
    left: 0;
    position: absolute;
    width: 100%;
    height:96-5%;
    top: 60px;
  }
  .el-main{
    width: 100%;
    height: 80%;
    padding: 20px;
  }
</style>

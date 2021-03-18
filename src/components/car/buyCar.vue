<template>
  <div class="bycar" style="height:914px;">
    <el-aside>
      <el-col :span="12" style="width:100%">
        <el-menu
          :default-active="active"
          class="el-menu-vertical-demo"
          @select="changeRouter"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">统计列表</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">视图列表</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">购车优惠</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">云客服</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-main style="width:100%;height:100%;">
      <router-view></router-view>
      
    </el-main>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        active:'1'
      }
    },
    methods:{
     changeRouter(menu){
       //使用element的select属性，属性传的是对应的index，
       if(menu == 1){
        //  如果index等于1，就显示Car这个路由的组件
         this.$router.push('/Car')
       }else if(menu == 2){
         this.$router.push('/Details')
         this.active = '2'
       }else{
         //vue的提示信息message,点击了就弹出开发中，请等待
         this.$message.success({message:"开发中，请等待"})
       }
     }
    },
    mounted(){
      if(this.$route.name == 'viewsList'){
        this.active = '2'
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-aside {
    flex: 1;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 150px;
  }
  
  .el-main {
    flex:7;
    background-color: #E9EEF3;
    color: #333;
    margin: 0px;
    padding: 20px;

  }
  .bycar{
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
  }
  .el-col{
    height: 100%;
  }
  .el-menu{
    height: 100%;
  }
</style>
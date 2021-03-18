<template>
  <div>
    <!-- table的显示根组件 -->
    <el-table :data="data" border style="width: 100%">
      <template v-for="(item,index) in coum">
        <el-table-column :key="index"
        :prop="item.key"
        :label="item.title"
        :width="item.width">
      </el-table-column>
      </template>
  </el-table>
  </div>
</template>

<script>
  export default {
    props:{
      data:{
        type:Array,
        required:true,
        default:()=>{
          return []
        }
      },
      coum:{
        type:Array,
        required:true,
        default:()=>{
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <el-table style="width:100%" :data="Tabdata" height="700px">
      <el-table-column v-for="(item,index) in commum" :fixed="item.fixed ? item.fixed : null" :key="index" :prop="item.key"
        :label="item.title"
        :width="item.width">
        <template slot-scope="scope">
          <!-- 通过具名插槽传递出去 -->
          <slot :name="item.key" :data="scope.row[item.key]">
            <span>
              {{scope.row[item.key]}}
            </span>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props:{
      commum:{
        type:Array,
        required:true,
        default:()=>{
          return []
        }
      },
      Tabdata:{
        type:Array,
        required:true,
        default:()=>{
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
<template>
  <div id="app">
    <!-- 优化element-ui表格的组件 -->
    <Tabley></Tabley>
  </div>
</template>

<script>
import Tabley from '@/table/byCartable.vue'
export default {
  name: 'App',
  components: {
    Tabley
  
  },
}
</script>

<style lang="less" scoped>
#app{
 margin: 0;
 padding: 0;
}
</style>

<template>
  <div id="screen">
    <div class="content">
      <!-- 城市 -->{{name}}
    </div>
    <div class="list">
      <span :class="{cur:curson == 0}" @click="changeCur(0)">不限</span>
      <span :class="{cur:curson == (index+1)}" @click="checkCur(index+1,item.key)" v-for="(item,index) in list" :key="index">{{item.value}}</span>
    </div>
  </div>
</template>

<script>
// import Screen from '@/link/screen.js'
  export default {
    props:{
      list:{
        type:Array,
        default:()=>{
          return []
        }
      },
      Screentype:{
        type:String,
      },
      name:{
        type:String,
      }
    },
    data(){
      return {
        curson:0
      }
    },
    methods:{
      checkCur(num,val){
        this.curson = num;
        //向父组件传一个方法，并将val作为参数带过去
        this.$emit('changeState', val,this.Screentype);
      },
      changeCur(num,val){
        this.curson = num;
        this.$emit('changeUnlimited',val,this.Screentype);
      }
    }
  }
</script>

<style lang="less" scoped>
#screen{
  margin: 20px 0;
  padding: 10px 0;
  display: flex;
  line-height: 30px;
  border-bottom: 1px solid rgb(122, 119, 119);
  .content{
    flex: 1;
  }
  .list{
    flex: 9;
    span{
      // padding-right: 40px;
      line-height: 30px;
      margin-right: 20px;
      display: inline-block;
      width: 60px;
      height: 30px;
      text-align: center;
      border-radius: 6px;
      cursor: pointer;
      &.cur{
        color: #fff;
        background: crimson;
      }
    }
  }
}
</style>
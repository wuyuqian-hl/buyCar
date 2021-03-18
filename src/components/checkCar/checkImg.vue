<template>
<!-- 轮播图 -->
  <div class="slide">
    <ul>
      <li :class='{cur:curDade == index}' v-for="(item,index) in checkImg" :key="index"><img :src="item" /></li>
    </ul>
    <div>  
      <span class="left" @click="prev">&lt;</span>
      <span class="right" @click="next">&gt;</span>
    </div>
    <div class="smallImg">
      <div v-for="(item,index) in checkImg" :key="index" :class="{curson:curDade == index}" @click="small(index)">
        <img :src="item" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      checkImg:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    data(){
      return {
        curDade:0
      }
    },
    methods:{
      prev(){
        this.curDade --
        if(this.curDade < 0){
          this.curDade =  this.checkImg.length
        }
      },
      next(){
        this.curDade ++
        if(this.curDade >= this.checkImg.length){
          this.curDade = 0
        }
      },
      small(index){
        this.curDade = index
      }
    }

  }
</script>

<style lang="less" scoped>
.slide{
  width:100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  ul{
    width: 100%;
    height: 450px;
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      img{
        width: 100%;
        height:450px;
      }
      &.cur{
        display: block;
      }
    }
  }
  div{
    span{
    display: inline-block;
    position: absolute;
    width: 60px;
    height: 50px;
    color: #fff;
    font-size: 20px;
    background: rgba(0,0,0,0.3);
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    }
    .left{
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .right{
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
  .smallImg{
    position: absolute;
    margin-top: 10px;
    width: 100%;
    height: 110px;
    display: flex;
    img{
      flex: 1;
      width: 100%;
      height: 100%;
    }
    div{
      margin-left: 5px;
      margin-right: 10px;
      &.curson{
        border: 5px solid rgb(223, 59, 9);
      }
    }
  }
}
</style>


export default class Linkmun{
  constructor(value) {
    this.value = value;
    
  }
  //得到数组
  get(...val){
    if (val.length === 0) return this.value
    let arr = []
    //遍历
    val.forEach((item) => {
      this.value.forEach((num) => {
        if (item === num.title) {
          arr.push(num)
        }
      })
    })
    return arr
  }
  //过滤数据
  un(val, data) {
    let arr = data
    let value = Array.isArray(val) ? val : [val]
    //过滤数据
    return arr.filter((item)=>!value.includes(item.title))
  }
  //头部增加数据
  unshift(val, data) {
    let arr = data
    let value = Array.isArray(val) ? val : [val]
    return arr.unshift(value)
  }
  //尾部增加数据
  push(val, data) {
    let arr = data
    let value = Array.isArray(val) ? val : [val]
    return arr.push(value)
  }
  //任意位置增加数据且切割掉index前面的数据
  random(val,index,data) {
    let arr = data
    let value = Array.isArray(val) ? val : [val]
    this.value.forEach((item) => {
      if (value.includes(item.title)) {
        arr.splice(val,index,item)
      }
    })
    return arr
  }
}
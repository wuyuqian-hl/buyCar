import Linkmun from './methodDate'
//罗列表格需要的数据
const rq = {
  key: 'date',
  title: '日期',
  width:170
}
const xm = {
  key: 'name',
  title: '姓名',
  width:170
}
const sf = {
  key: 'province',
  title: '省份',
  width:170
}
const sq = {
  key: 'city',
  title: '市区',
  width:170
}
const dz = {
  key: 'address',
  title: '地址',
  width:170
}
const yb = {
  key: 'code',
  title: '邮编',
  width:170
}

const dataObj = [
  rq,
  xm,
  sf,
  sq,
  dz,
  yb
]
export default new Linkmun(dataObj)
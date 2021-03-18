import Linkmun from './methodDate'
//罗列表格需要的数据
const id = {
    key: 'id',
    title: 'id',
    width: '150'
}
const qcxl = {
    key: 'car_series',
    title: '汽车系列',
    width: '150'
}
const bsx = {
    key: 'car_gear_box',
    title: '变速箱',
    width: '150'
}

const cs = {
    key: 'city',
    title: '城市',
    width: '150'
}
const sf = {
    key: 'province',
    title: '省份',
    width: '150'
}
const lc = {
    key: 'mileage',
    title: '里程（万公里）',
    width: '150'
}

const gxsj = {
    key: 'updated_at',
    title: '更新时间',
    width: '150'
}
const qcpp = {
    key: 'car_brand',
    title: '汽车品牌',
    width: '150'
}
const rylx = {
    key: 'car_fuel_type',
    title: '燃油类型',
    width: '150'
}
const qclx = {
    key: 'car_model',
    title: '汽车类型',
    width: '150'
}
const czmc = {
    key: 'link_man',
    title: '车主名称',
    width: '150'
}
const sj = {
    key: 'sell_price',
    title: '售价',
    width: '150'
}
const jydd = {
    key: 'market_title',
    title: '交易地点',
    width: '190'
}
const cz = {
  key: 'id',
  title: '操作',
  width: '150',
  slot: 'slot',
  fixed:'right'

}
const pl = {
  key: 'emission',
  title: '排量',
  width: '150',

}
const dataObj = [
    id,
    cs,
    qcxl,
    sf,
    gxsj,
    qcpp,
    rylx,
    qclx,
    czmc,
    jydd,
    lc,
    bsx,
    sj,
    cz,
    pl
]

export default new Linkmun(dataObj)
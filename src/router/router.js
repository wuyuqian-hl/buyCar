import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// //设置别名
// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname,dir)
// }
// //暴露别名
// module.export = {
//   chainWebpack:(config) => {
//     config.resolve.alias.set("@$",resolve('src'))
//   }
// }
//解决重复点击的报错问题  push才有用（有记录），replace没用（无记录）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err) 
}
let router = new VueRouter({
  //将所有类名统一设成is-active
  linkActiveClass: 'is-active',
  //使用histroy模式
  mode:'history',
  routes: [
    {
      path: '/home',
      component:()=> import('@/components/home/home')
    },
    {
      //全局如果用户在地址栏上搜索了本地没有的页面，就返给客户一个404页面，而不是空白页面
      path: '*',
      // 路由重定向
      redirect:'/home',
    },
    {
      path: '/buy-car',
      component: () => import('@/components/car/buyCar'),
      children: [{
        path: '/Car',
        name:'car/Car',
        component:()=> import('@/components/car/Car')
      },{
        path: '/Details',
        name:'viewsList',
        component:()=> import('@/components/viewsList')
      }],
      redirect:'/Car',
    },{
      path: '/checkCar',
      component:()=> import('@/components/checkCar/checDetailsCar')
    },
  ]
})



//判断用户是否登录，没登录就打回原形
// router.beforeEach((to, from, next) => {
//   //获取login页面的用户名和密码
//   const username = localStorage.getItem('username');
//   const password = localStorage.getItem('password');
//   //判断如果有username和password，就让他直接去到form页面
//   if (username && password) {
//     next()
//   } else {
//     //再次判断，如果当前页面是login就放行，否则会死循环，如果直接打开form页面，就让他打回到login页面，
//     if (to.path == '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

export default router
import Vue from 'vue'
//安装国际化语言vue-i18n   npm install --save vue-i18n  引入 然后在main.js中注册
import VueI18n from 'vue-i18n'

//引入相关模块
import zh from './zh'
import en from './en'

Vue.use(VueI18n)

//navigator.language是浏览器现在的语言
const navLang = navigator.language
//如果浏览器的语言有中文或英文就返回中文或英文，没有就返回false
let localeLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
//判断浏览器的语言  如果相等，就让它等于自己设置的语言
if (localeLang == 'zh-CN') {
  localeLang = zh;
} else if (localeLang == 'en-US') {
  localeLang = en;
}
//让浏览器语言刷新时最少有一个
let lang = localStorage.getItem('lang') || localeLang || 'zh'
//改变浏览器语言
localStorage.getItem('lang', lang)

const i18n = new VueI18n({
  //设置当前默认语言
  locale:localStorage.getItem('lang') || 'zh',
  messages: {
    zh,
    en
  }
})
//将i18n暴露出去
export default i18n
import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import router from './router/router'
import i18n from './lang/lang'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


Vue.use(ElementUi)
Vue.prototype.$http = axios

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  i18n,
  router,
}).$mount('#app')

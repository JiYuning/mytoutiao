import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElenmenrUI from 'element-ui'// 引入模块
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import './styles/index.less'// 引入初始化css文件
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios // 赋值给全局对象

Vue.use(ElenmenrUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

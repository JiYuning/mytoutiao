import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElenmenrUI from 'element-ui'// 引入模块
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
Vue.use(ElenmenrUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

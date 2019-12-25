import layoutAside from './home/layout-aside'
import layoutTop from './home/layout-top'
import breadCrumb from './common/bread-crumb'

export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)// 注册全局组件
    Vue.component('layout-top', layoutTop)// 注册全局组件
    Vue.component('bread-crumb', breadCrumb)// 注册全局面包屑
  }
}

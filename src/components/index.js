import layoutAside from './home/layout-aside'
import layoutTop from './home/layout-top'

export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-top', layoutTop)
  }
}

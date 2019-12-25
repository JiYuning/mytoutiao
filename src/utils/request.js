import axios from 'axios'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  // config请求参数配置
  // 执行请求OK
  let token = localStorage.getItem('user-token')

  config.headers.Authorization = `Bearer ${token}` // 同一注入token

  return config // 表示会用该config请求进行后台操作
}, function () {
  // 执行请求失败
})

export default axios

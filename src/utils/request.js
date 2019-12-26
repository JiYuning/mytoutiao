import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
import JSONBig from 'json-bigint'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config请求参数配置
  // 执行请求OK
  let token = localStorage.getItem('user-token')

  config.headers.Authorization = `Bearer ${token}` // 同一注入token

  return config // 表示会用该config请求进行后台操作
}, function () {
  // 执行请求失败
})

axios.defaults.transformResponse = [function (data) {
  return JSONBig.parse(data)// 解决js处理大数字失真问题
}]

// 响应拦截器

axios.interceptors.response.use(function (response) {
  // 响应成功
  return response.data ? response.data : {}
}, function (error) {
  // 响应失败
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      window.localStorage.removeItem('user-token') // 删除过期的token
      router.push('/login') // 跳到登录页
      break
    case 403:
      message = '没有设置这条评论的权限'
      break
    default:
      break
  }
  Message({ type: 'warning', message })// 提示信息
  return Promise.reject(error)// 只要reject就进入catch
})

export default axios

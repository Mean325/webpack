import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
import { Indicator } from 'mint-ui'
// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 静态资源
Vue.prototype.$static = ''

// 配置接口地址
axios.defaults.baseURL = ''
var loadingInstance
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    loadingInstance = Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    // if (config.method === 'post') {
    //   config.data = qs.stringify(config.data)
    // }
    return config
  },
  err => {
    Indicator.close();
    // Message.error('请求错误')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.result) {
      Indicator.close();
      return res
    } else {
      Indicator.close();
      // Message.error(res.data.msg)
    }
  },
  err => {
    Indicator.close();
    // Message.error('请求失败，请稍后再试')
    return Promise.reject(err)
  }
)
// 发送请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
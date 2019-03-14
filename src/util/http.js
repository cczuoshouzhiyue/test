import axios from 'axios'
import qs from 'qs'
import configParam from '@/config'
import config from '../config'
const axiosIns = axios.create()
axiosIns.defaults.retry = configParam.retry
axiosIns.defaults.retryDelay = configParam.retryDelay
axiosIns.defaults.timeout = configParam.timeOut
axiosIns.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]
// 添加请求拦截器
axiosIns.interceptors.request.use(function (config) {
  // const token = window.localStorage.getItem('token')
  // 把token放到header里面
  // if (token) {
  //   config.headers['token'] = token
  // }
  if (config.url.indexOf('http') === -1) {
    config.url = configParam.siteUrl + config.url
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log('错误的传参')
  return Promise.reject(error)
})

axiosIns.interceptors.response.use(function (response) {
  // 对响应数据做些事
  return response
}, function (error) {
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    let config = error.config
    config.__retryCount = config.__retryCount || 0
    if (config.__retryCount >= config.retry) {
      return Promise.reject(error)
    }
    config.__retryCount += 1
    let backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve()
      }, config.retryDelay || 1)
    })
    return backoff.then(function () {
      return axiosIns(config)
    })
  } else {
    return Promise.reject(error)
  }
})

const parseResponse = function (response) {
  let promise = new Promise((resolve, reject) => {
    resolve(response)
  })
  return promise
}
export default function createAxios () {
  return {
    get (url, query, config) {
      return axios.get(url, query, config).then(parseResponse)
    },
    post (url, query, config) {
      return axios.get(url, query, config).then(parseResponse)
    }
  }
}

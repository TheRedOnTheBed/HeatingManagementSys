/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-20 23:09:56
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-22 13:01:35
 */
import axios from 'axios'
import Vue from 'vue'
import router from '@/router'

const http = axios.create({
  timeout: 2000,
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.msg) {
    Vue.prototype.$message.error(err.response.data.msg)
    if (err.response.status === 401) {
      router.push('/login')
    }
  }
  return Promise.reject(err)
})

export default http
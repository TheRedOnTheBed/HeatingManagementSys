/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-18 09:18:13
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-29 12:50:45
 * 用户请求接口模块
 */

import axios from '@/utils/request'

//  登录接口
const login = (user) => {
  return axios.post('/api/users/login', user)
}

// 获得当前用户信息接口
const userinfo = () => {
  return axios.get('/api/users/userinfo')
}

// 列出用户信息接口
const listuser = (data) => {
  return axios.get('/api/users/show', {
    params: data
  })
}

// 根据用户姓名查询用户
const selectuser = (data) => {
  return axios.post('/api/users/select', {
    realname: data
  })
}

// 根据用户名查找是否有重复
const sameuser = (data) => {
  return axios.get('/api/users/sameuser', {
    params: {
      user_name: data
    }
  })
}

// 添加用户
const adduser = (user) => {
  return axios.post('/api/users/adduser', user)
}

export default {
  login,
  userinfo,
  listuser,
  selectuser,
  sameuser,
  adduser
}
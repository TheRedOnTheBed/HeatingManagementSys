/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-18 09:18:13
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-22 01:30:47
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

export default {
  login,
  userinfo,
}
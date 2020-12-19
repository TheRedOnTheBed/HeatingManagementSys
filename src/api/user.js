/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-18 09:18:13
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-18 09:33:56
 * 用户请求接口模块
 */

import axios from 'axios'
//  登录接口
const login = (user) => {
  return axios.post('/api/users/login', user)
}

export default {
  login
}
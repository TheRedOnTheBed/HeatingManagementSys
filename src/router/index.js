/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 19:05:08
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-16 16:51:54
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRouter from './Login'

Vue.use(VueRouter)

const routes = [
  loginRouter,
  {
    path: '/*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

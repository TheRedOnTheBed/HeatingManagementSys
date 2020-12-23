/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 19:05:08
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-23 16:45:28
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRouter from './Login'
import homeRouter from './Home'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  loginRouter,
  homeRouter,
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

// 进入路由前进行判断
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublish && !localStorage.token) {
    return next('/login')
  }
  next()
})

export default router

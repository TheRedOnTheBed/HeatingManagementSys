/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-18 10:11:35
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-28 17:42:00
 */
export default {
  path: '/home',
  component: () => import('@/views/Home'),
  redirect: '/home/main',
  children: [
    {
      path: 'main',
      name: 'main',
      component: () => import('@/components/homePage'),
    },
    {
      path: 'userlist',
      name: 'userlist',
      component: () => import('@/components/userList'),
    },
    {
      path: 'timing',
      name: 'timing',
      component: () => import('@/components/timeMonitor'),
    },
    {
      path: 'history',
      component: () => import('@/components/historyData'),
    },
  ],

}
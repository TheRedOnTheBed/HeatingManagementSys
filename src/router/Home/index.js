/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-18 10:11:35
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-19 23:27:12
 */
export default {
  path: '/home',
  component: () => import('@/views/Home'),
  children: [
    {
      path: 'main',
      component: () => import('@/components/homePage'),
    },
    {
      path: 'userlist',
      component: () => import('@/components/userList'),
    },
    {
      path: '/home',
      redirect: '/home/main'
    }
  ],

}
/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-18 10:11:35
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-19 13:42:00
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
      path: '/home',
      redirect: '/home/main'
    }
  ],

}
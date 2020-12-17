/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:47:19
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-18 00:00:29
 */
module.exports = {
  devServer: {
    open: false,
    port: 8999,
    proxy: {
      '/api': {
        'target': 'http://172.18.52.79:3000',
        'changeOrigin': true,
      },
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]

}
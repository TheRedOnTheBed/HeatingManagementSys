/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:47:19
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-19 21:07:37
 */
module.exports = {
  devServer: {
    open: false,
    port: 8999,
    proxy: {
      '/api': {
        'target': 'http://localhost:3000',
        'changeOrigin': true,
      },
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]

}
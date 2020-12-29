/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:47:19
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-20 22:49:04
 */
module.exports = {
  devServer: {
    open: false,
    port: 8999,
    proxy: {
      '/api': {
        'target': 'http://localhost:9000',
        'changeOrigin': true,
      },
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]

}
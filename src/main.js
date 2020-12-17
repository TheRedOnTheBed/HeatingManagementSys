/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 19:05:08
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-17 23:49:40
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vant.js'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.axios = axios


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

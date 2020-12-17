/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:47:06
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-16 10:41:29
 */
import Vue from 'vue'
import Vuetify, { VForm, VTextField, VSelect, VBtn, VCheckbox } from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify)

export default new Vuetify({
  components: {
    VForm,
    VTextField,
    VSelect,
    VBtn,
    VCheckbox
  },
  directives: {
    Ripple,
  },
})

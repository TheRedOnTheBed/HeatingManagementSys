/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:47:06
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-18 23:06:29
 */
import Vue from 'vue'
import Vuetify, {
  VForm,
  VTextField,
  VSelect,
  VBtn,
  VCheckbox,
  VAvatar,
  VCard,
  VNavigationDrawer,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VListGroup,
  VDivider,
  VListItemIcon,
  VIcon,
  VSystemBar,
  VContent,
  VListItemGroup

} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify)

export default new Vuetify({
  components: {
    VForm,
    VTextField,
    VSelect,
    VBtn,
    VCheckbox,
    VAvatar,
    VCard,
    VNavigationDrawer,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VDivider,
    VListItemIcon,
    VIcon,
    VSystemBar,
    VContent,
    VListGroup,
    VListItemGroup
  },
  directives: {
    Ripple,
  },
})

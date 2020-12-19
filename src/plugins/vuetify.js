/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:47:06
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-19 21:46:08
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
  VListItemGroup,
  VCardText,

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
    VListItemGroup,
    VCardText
  },
  directives: {
    Ripple,
  },
})

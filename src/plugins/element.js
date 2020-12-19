/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:30:30
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-19 22:49:53
 */
import Vue from 'vue'
import {
  Button,
  Image,
  Message,
  MessageBox,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Breadcrumb,
  BreadcrumbItem,
} from 'element-ui'

Vue.use(Button)
Vue.use(Image)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.component(MessageBox)
Vue.component(Message)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
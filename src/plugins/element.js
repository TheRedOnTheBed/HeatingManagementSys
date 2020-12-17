/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:30:30
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-17 01:20:04
 */
import Vue from 'vue'
import { Button, Image, Message, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.use(Image)
Vue.component(MessageBox)
Vue.component(Message)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
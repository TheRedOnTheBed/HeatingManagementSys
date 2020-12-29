/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-11 23:30:30
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-29 00:14:04
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
  Card,
  Row,
  Col,
  Input,
  Table,
  TableColumn,
  Tooltip,
  Pagination,
  Dialog,
  Form,
  FormItem,
  Select,
  Option
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
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Select)
Vue.use(Option)
Vue.component(MessageBox)
Vue.component(Message)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
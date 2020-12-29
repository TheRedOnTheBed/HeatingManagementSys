<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-18 10:30:59
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-28 17:47:46
-->
<!-- 侧边导航栏 -->
<template>
  <v-navigation-drawer
    app
    permanent
    expand-on-hover
    mini-variant-width="70"
    :mini-variant.sync="ishover"
    color="#dff9fb"
    style="border-top:1px solid #ccc"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar color="indigo" size="48">
          <span class="white--text headline">{{this.user.firstword}}</span>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">{{this.user.name}}</v-list-item-title>
          <v-list-item-subtitle>{{this.user.role}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="px-2">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-4" icon color="#1e90ff" v-bind="attrs" v-on="on">
              <v-icon size="30px">mdi-pencil-box-multiple-outline</v-icon>
            </v-btn>
          </template>
          <span>修改信息</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-4" icon color="#ff4757" v-bind="attrs" v-on="on" @click="logOut">
              <v-icon size="30px">mdi-logout</v-icon>
            </v-btn>
          </template>
          <span>退出登录</span>
        </v-tooltip>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.action"
        no-action
        v-model="item.active"
        v-show="item.show"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title" link :to="child.address">
          <v-list-item-title v-text="child.title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="child.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import userapi from '@/api/user.js'
export default {
  name: 'AsideNavigation',
  watch: {
    // 监听当前路由，当为主页时取消侧边栏高亮
    // $router: "reset"
    // $route (to, from) {
    //   if (to.path === '/home/main' && from.path != '/home/main') {
    //     this.reset()
    //   }
    // }
  },
  created () {

  },
  mounted () {
    this.setHighLight()
    this.lodeUserInfo()
  },
  computed: {

  },
  data () {
    return {
      user: {},
      ishover: true,
      role: '',
      items: [
        {
          action: 'mdi-account',
          items: [
            {
              title: '用户列表',
              icon: 'mdi-view-grid-outline',
              address: 'userlist',
            },

          ],
          show: true,
          title: '用户管理',
        },
        {
          action: 'mdi-timetable',
          items: [
            {
              title: '实时温度',
              icon: 'mdi-coolant-temperature',
              address: 'timing',
            },
            {
              title: '实时水压',
              icon: 'mdi-waves',
              address: 'timing',
            },
            {
              title: '实时燃气压力',
              icon: 'mdi-fire',
              address: 'timing',
            },
          ],
          show: true,
          title: '实时监控',
        },
        {
          action: 'mdi-database-clock-outline',
          items: [
            {
              title: '历史温度',
              icon: 'mdi-coolant-temperature',
              address: 'history',
            },
            {
              title: '历史水压',
              icon: 'mdi-waves',
              address: 'history',
            },
            {
              title: '历史燃气压力',
              icon: 'mdi-fire',
              address: 'history',
            },
          ],
          show: true,
          title: '历史数据',
        },
        {
          action: 'mdi-engine',
          items: [
            {
              title: '锅炉状态',
              icon: 'mdi-eye',
              address: '/login',
            },

          ],
          show: true,
          title: '锅炉',
        },
      ],
    }
  },
  methods: {
    // 重置导航栏选项
    // reset () {
    //   if (this.$router.path == '/home/userlist') {
    //     this.items[1].active = true
    //     console.log(111)
    //   }
    // },
    // 设置侧边栏高亮
    setHighLight () {
      if (this.$route.name == 'userlist') {
        this.items[0].active = true
      }
    },

    async lodeUserInfo () {
      await userapi.userinfo().then((res => {
        this.$store.commit('newUserInfo', res.data)
        this.user = res.data
        if (this.user.roleCode == 2) {
          this.items[0].show = false
        }
      }))
    },
    logOut () {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 清除token
        localStorage.clear()
        // 进入登录页面
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  },
}

</script>
<style scoped>
</style>
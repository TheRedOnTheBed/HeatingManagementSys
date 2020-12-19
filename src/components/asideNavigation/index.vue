<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-18 10:30:59
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-19 23:00:53
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
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar color="indigo" size="48">
          <span class="white--text headline">36</span>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">Sandra Adams</v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
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
            <v-btn class="mx-4" icon color="#ff4757" v-bind="attrs" v-on="on">
              <v-icon size="30px">mdi-logout</v-icon>
            </v-btn>
          </template>
          <span>退出登录</span>
        </v-tooltip>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-group v-for="item in items" :key="item.title" :prepend-icon="item.action" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title" link to="child.address">
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
export default {
  name: 'AsideNavigation',
  data () {
    return {
      user: '',
      ishover: true,
      role: '',
      items: [
        {
          action: 'mdi-account',
          items: [
            {
              title: '用户列表',
              icon: 'mdi-view-grid-outline',
              address: '/login',
            },

          ],
          title: '用户管理',
        },
        {
          action: 'mdi-timetable',
          items: [
            {
              title: '实时温度',
              icon: 'mdi-coolant-temperature',
              address: '/login',
            },
            {
              title: '实时水压',
              icon: 'mdi-waves',
              address: '/login',
            },
            {
              title: '实时燃气压力',
              icon: 'mdi-fire',
              address: '/login',
            },
          ],
          title: '实时监控',
        },
        {
          action: 'mdi-database-clock-outline',
          items: [
            {
              title: '历史温度',
              icon: 'mdi-coolant-temperature',
              address: '/login',
            },
            {
              title: '历史水压',
              icon: 'mdi-waves',
              address: '/login',
            },
            {
              title: '历史燃气压力',
              icon: 'mdi-fire',
              address: '/login',
            },
          ],
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
          title: '锅炉',
        },
      ],
    }
  },
  methods: {

  },
}

</script>
<style scoped>
</style>
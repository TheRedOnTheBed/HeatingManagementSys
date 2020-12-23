<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-18 00:21:39
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-22 17:21:55
-->

<!-- 主页视图 -->
<template>
  <v-app>
    <v-system-bar app height="80" color="#dff9fb" style="border-bottom:1px solid #ccc">
      <div class="sys-title" @click="gotoHome">
        <img src="../../assets/锅炉系统.png" alt />
        <h2>供暖数据管理系统</h2>
      </div>
    </v-system-bar>
    <AsideNavigation></AsideNavigation>
    <v-main>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="brief-bar">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      </el-breadcrumb>

      <v-container fluid class="main-container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-main>
    <v-footer :padless="padless" light fixed>
      <v-card flat tile width="100%" class="lighten-1 text-center" height="35" color="#f5f6fa">
        <v-card-text style="padding:0">
          <v-tooltip top v-for="i in items" :key="i.title">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mx-4" icon @click="footerFun(i.method)" v-bind="attrs" v-on="on">
                <v-icon size="25px">{{ i.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{i.title}}</span>
          </v-tooltip>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import AsideNavigation from '@/components/asideNavigation'
import userapi from '@/api/user.js'
export default {
  name: 'Home',
  components: {
    AsideNavigation
  },
  created () {
  },
  mounted () {

  },
  data () {
    return {
      padless: true,
      items: [
        {
          icon: 'mdi-home',
          title: '主页',
          method: 1,
        },
        {
          icon: 'mdi-blogger',
          title: '博客',
          method: 2,
        },
        {
          icon: 'mdi-logout',
          title: '退出',
          method: 3,
        },
      ],
    }
  },
  methods: {
    footerFun (index) {
      switch (index) {
        case 1: {
          this.gotoHome()
          break
        }
        case 2: {
          console.log(222)
          break
        }
        case 3: {
          console.log(333)
          break
        }
      }
    },
    gotoHome () {
      if (this.$router.path != '/home/main') {
        this.$router.push('/home')
      }
    },
    logOut () {

    }
  },
}

</script>
<style scoped>
.sys-title {
  display: flex;
}
.sys-title img {
  height: 50px;
  margin-right: 10px;
}
.sys-title h2 {
  line-height: 50px;
}
.main-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.brief-bar {
  line-height: 40px;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  margin: 0 30px;
}
</style>


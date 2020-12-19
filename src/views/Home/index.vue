<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-18 00:21:39
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-18 17:05:37
-->

<!-- 主页视图 -->
<template>
  <v-app>
    <v-system-bar app height="80">
      <div class="sys-title">
        <img src="../../assets/锅炉系统.png" alt />
        <h2>供暖数据管理系统</h2>
      </div>
    </v-system-bar>
    <AsideNavigation></AsideNavigation>
    <v-main>
      <v-container fluid>31da3s21</v-container>
    </v-main>
  </v-app>
</template>

<script>
import AsideNavigation from '@/components/asideNavigation'
export default {
  name: 'Home',
  components: {
    AsideNavigation
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
</style>


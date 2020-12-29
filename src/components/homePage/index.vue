<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-19 13:33:11
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-23 21:34:59
-->
<!-- 主页 -->
<template>
  <div class="main">
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="brief-bar">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'HomeMain'
}

</script>
<style scoped>
@import '../../../public/css/componentsstyle.css';
.main {
  width: 100%;
  height: 100%;
  background: url('../../../public/img/main_bg.png') no-repeat;
  background-size: 450px;
  background-position: 700px 180px;
}
</style>